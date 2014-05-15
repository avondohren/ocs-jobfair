class Checkin < ActiveRecord::Base
  attr_accessible :company, :name, :title
  
  validates :company, :presence => true
  validates :name, :presence => true
  validates :title, :presence => true
end
