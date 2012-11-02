class MenController < ApplicationController
  # GET /men
  # GET /men.xml
  def index
    @men = Man.order(:name)

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @men }
    end
  end

  # GET /men/1
  # GET /men/1.xml
  def show
    @man = Man.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @man }
    end
  end

  # GET /men/new
  # GET /men/new.xml
  def new
    @man = Man.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @man }
    end
  end

  # GET /men/1/edit
  def edit
    @man = Man.find(params[:id])
  end

  # POST /men
  # POST /men.xml
  def create
   # debugger
   # flash.notice = "flash.notice"
    @man = Man.new(params[:man])
    
    isTrue = Man.test_idcard_by_realname(@man.idcard,@man.real_name)
    
    if isTrue
   # @man = Man.new(params[:man])
     
    respond_to do |format|
      if @man.save
        format.html { redirect_to(men_url,
              :notice => "Man #{@man.name}was successfully created.") }
        format.xml  { render :xml => @man, :status => :created, :location => @man }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @man.errors, :status => :unprocessable_entity }
      end
    end 
    else
    redirect_to new_man_path,flash[:alert] => "invalid idcard and real name"
    end
  end

  # PUT /men/1
  # PUT /men/1.xml
  def update
    @man = Man.find(params[:id])

    respond_to do |format|
      if @man.update_attributes(params[:man])
        format.html { redirect_to(men_url,
             :notice => "Man #{@man.name}was successfully updated.") }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @man.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /men/1
  # DELETE /men/1.xml
  def destroy
    @man = Man.find(params[:id])
    @man.destroy

    respond_to do |format|
      format.html { redirect_to(men_url) }
      format.xml  { head :ok }
    end
  end
end
