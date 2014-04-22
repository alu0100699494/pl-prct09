$:.unshift "."
require 'sinatra'
require "sinatra/reloader" if development?
require 'sinatra/flash'
require 'database'
require 'auth'
require 'pp'

enable :sessions
set :session_secret, '*&(^#234)'
set :reserved_words, %w{grammar test login auth logout}
set :max_files, 10        # no more than max_files+1 will be saved per user

helpers do
  def current?(path='/')
    (request.path==path || request.path==path+'/') ? 'active' : ''
  end
end

get '/grammar' do
  erb :grammar
end

get '/test' do
  erb :test
end

get '/logout' do
  # Si está autenticado, desautenticar
  if session[:auth]
    session[:auth] = nil;
    flash[:notice] = 
      %Q{<div class="notice bg-lime fg-white marker-on-top">Se ha cerrado sesión correctamente.</div>}
  end
  
  redirect back
end

# Raiz, sin usuario seleccionado
get '/' do
  programs = []
  
  source = "a = 3-2-1."
  erb :index, 
      :locals => { :programs => programs, :source => source }
end

get '/:selected?' do |selected|
  puts "LISTA DE USUARIOS:"
  puts "-------------------------------"
  User.each do |u|
    pp u
  end
  puts "-------------------------------"
      
  # Buscar programas de un usuario y mostrarlos en el menu
  u = User.first(:username => selected)
  puts u
  if !u
    flash[:notice] = 
      %Q{<div class="notice bg-darkRed fg-white marker-on-top">No se ha encontrado al usuario "#{selected}". </div>}
    redirect to '/'
  end

  # Cargar los programas del usuario actual
  programs = u.pl0programs

  c = programs[0]
  source = if c then c.source else "a = 3-2-1." end
  erb :index, 
      :locals => { :programs => programs, :source => source }
end

post '/save' do
  pp params
  name = params[:fname]
  if session[:auth] # authenticated
    if settings.reserved_words.include? name  # check it on the client side
      flash[:notice] = 
        %Q{<div class="notice bg-darkRed fg-white marker-on-top">No se puede guardar el fichero de nombre '#{name}'.</div>}
      redirect back
    else
      # Comprobar si el usuario existe.
      u = User.first(session[:email])
      if !u
        # Si no existe, crear el usuario
        u = User.create(:username => session[:email])
      end

      # Crear un programa y asociar al usuario
      c  = u.pl0programs.first(:name => name)
      if c
        c.source = params["input"]
        c.save
      else
        if Pl0program.all.size >= settings.max_files
          c = Pl0program.all.sample
          c.destroy
        end
        c = Pl0program.create(:name => params["fname"], :source => params["input"])
        
        u.pl0programs << c
      end
      
      u.save
      
      puts "PROGRAMAS DEL USUARIO QUE ACABA DE GUARDAR:"
      puts "-------------------------------"
      u.pl0programs.each do |p|
        pp p
      end
      puts "-------------------------------"
      
      flash[:notice] = 
        %Q{<div class="notice bg-cyan fg-white marker-on-top">Fichero guardado como "#{c.name}" por "#{session[:name]}".</div>}
      # redirect to '/'+name
      redirect to '/' + u.username # + '/' + name 
    end
  else
    flash[:notice] = 
      %Q{<div class="notice bg-darkRed fg-white marker-on-top">No está autenticado.<br />
         Inicie sesión con Google o con Facebook.
         </div>}
    redirect back
  end
end
