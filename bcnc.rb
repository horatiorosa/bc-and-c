require 'sinatra'
get '/' do
	erb :home
end
get '/about' do
	erb :about
end
get '/services' do
	erb :services
end
post '/contact' do
	puts params.inspect
	email = params["email"]
	user_message = params["message"]
	puts "sending email!"  
	m = Mandrill::API.new
	message = {  
	 :subject=> "New Message",  
	 :from_name=> "Web Monitor",  
	 :text=>"New Message: " + user_message,  
	 :to=>[  
	   {  
	     :email=> email,  
	     :name=> "Web User"  
	   }  
	 ],  
	 :html=>"<html><h1>New Message</h1><h3>#{user message}</h3></html>",  
	 :from_email=>"horatiorosa@aol.com"  
	}  
	sending = m.messages.send message  
	puts sending
		redirect to('/thanks')
end

get '/thanks' do
	erb	:thanks
end
