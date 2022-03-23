class Doctor < ApplicationRecord
  has_many :appointments
  has_many :users, through: :appointments

  def get_users_with_appointments
    self.users.map do |user|
      
    end
  end
end
