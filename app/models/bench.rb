class Bench < ApplicationRecord
  validates :description, presence: true
  validates :lat, inclusion: {
    in: -90..90,
    message: "must be between -90 and 90 inclusive" }
  validates :lon, inclusion: {
    in: -180..180,
    message: "must be between -180 and 180 inclusive" }
end
