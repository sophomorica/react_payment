class Api::BraintreeController < ApplicationController
  def token
    render json: ENV["BRAINTREE_DROPIN_TOKEN"]
  end

  def payment
    result = Braintree::Transaction.sale(:amoutn => params[:amount], :payment_method_nonce => [:nonce], :options => {:submit_for_settlement => true})
  end
end
