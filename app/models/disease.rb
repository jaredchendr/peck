class Disease < ActiveRecord::Base
  searchable do
    text :symp,:stored => true
    text :name,:stored => true
    #:signal,:symp,:name,:defi,:divi,:factor,:stored => true
  end
end