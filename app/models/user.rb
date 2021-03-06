class User < ApplicationRecord

  after_initialize :ensure_session_token

  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }

 # Associations
  has_many :tracks,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :Track

  has_many :comments,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :Comment


  has_one_attached :profile_pic

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    (user && user.is_password?(password)) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(32)
  end

  attr_reader :password

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    password_object = BCrypt::Password.new(self.password_digest)
    password_object.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
end