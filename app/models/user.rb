class User < ApplicationRecord
  has_many :appointments
  has_many :doctors, through: :appointments

  def get_doctors_with_appointments
    self.doctors.map do |doctor|
      appts = doctor.appointments.find_by(user_id: self.id).appointments
      {doctor: doctor, appointments: appointments}
    end
  end
end
