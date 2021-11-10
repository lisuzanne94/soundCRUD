class Api::UsersController < ApplicationController

  def index
    # length = User.all.length
    # random_idxs = []
    # random_idxs << rand(1..length) until random_idxs.length === 5
    # @users = User.where(:id => random_idxs)

    @users = User.all
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :profile_pic)
  end
end
