class Api::V1::GreetingsController < ApplicationController
  def index
    render json: {
      greeting: Greeting.all.sample
    }.to_json
  end
end
