/* tslint:disable:max-line-length */
module preview {
  export var html = '<!-- Gift Cards - Content --><div class="container gift-cards wow fadeIn">    <form class="form-horizontal">        <div class="panel panel-default">            <div class="panel-heading">                <h3 class="panel-title">Order Summary</h3>            </div>            <div class="panel-body" >                <div class="col-xs-12 col-sm-4">                    <div class="form-group">                        <strong>Ship to:</strong><br />                        {{ShippingFirstName}} {{ShippingLastName}} <br />                        {{ShippingAddress1}}<br />                        {{ShippingCity}}, {{ShippingState}} {{ShippingPostalCode}} <br />                        {{ShippingPhone}} <br />                        {{ShippingEmail}} <br />                    </div>                </div>                <div class="col-xs-12 col-sm-4">                    <div class="form-group">                        <strong>Bill to:</strong><br />                        {{BillingFirstName}} {{BillingLastName}} <br />                        {{BillingAddress1}}<br />                        {{BillingCity}}, {{BillingState}} {{BillingPostalCode}} <br />                        {{BillingPhone}} <br />                        {{BillingEmail}} <br />                    </div>                </div>                <div class="col-xs-12 col-sm-4">                    <div class="form-group">                        <strong>Gift Card Info:</strong><br />                        Gift Message:<br />                        {{Message}} <br />                        <br />                        Special Intructions:<br />                        {{SpecialInstructions}} <br />                    </div>                </div>                <div class="col-xs-12">                    <strong>Order Total:</strong>                    <table class="table">                        <tr>                            <td style="border-top:none">                                Beardslee Public House Gift Card                            </td>                            <td class="text-right" style="border-top:none">                                ${{Amount}}                            </td>                        </tr>                        <tr>                            <td style="border-top:none">                                Shipping: <br />                                {{ShippingTypeString}}                            </td>                            <td class="text-right" style="border-top:none">                                ${{ShippingCost}}                            </td>                        </tr>                        <tr>                            <td>                                <strong>Total</strong>                            </td>                            <td class="text-right">                                <strong>${{OrderTotal}}</strong>                            </td>                        </tr>                    </table>                </div>            </div>        </div>        <div class="panel panel-default">            <div class="panel-heading">                <h3 class="panel-title">Payment Information</h3>            </div>            <div class="panel-body">                <div class="form-group">                    <div class="alert alert-danger col-sm-10 col-sm-offset-1" style="padding: 0;" *ngIf="cardTypeErrorMessage.length > 0">{{cardTypeErrorMessage}}</div>                    <label for="cardType" class="col-xs-12 col-sm-2 control-label">Card Type*</label>                    <div class="col-sm-10">                        <select [(ngModel)]="CardType" name="CardType" class="form-control">                            <option value="0">Select Card Type</option>                            <option value="Visa">Visa</option>                            <option value="Master Card">Master Card</option>                            <option value="Discover">Discover</option>                            <option value="American Express">American Express</option>                        </select>                    </div>                </div>                <div class="form-group">                    <div class="alert alert-danger col-sm-10 col-sm-offset-1" style="padding: 0;" *ngIf="cardNumberErrorMessage.length > 0">{{cardNumberErrorMessage}}</div>                    <label for="cardNumber" class="col-xs-12 col-sm-2 control-label">Card Number*</label>                    <div class="col-sm-10">                        <input [(ngModel)]="CardNumber" name="CardNumber" type="number" maxlength="20" class="form-control" placeholder="Card Number" />                    </div>                </div>                <div class="form-group">                    <div class="alert alert-danger col-xs-10 col-sm-offset-1" style="padding: 0;" *ngIf="expirationMonthErrorMessage.length > 0">{{expirationMonthErrorMessage}}</div>                    <div class="alert alert-danger col-xs-10 col-sm-offset-1" style="padding: 0;" *ngIf="expirationYearErrorMessage.length > 0">{{expirationYearErrorMessage}}</div>                    <label for="expiration" class="col-xs-12 col-sm-2 control-label">Expiration*</label>                    <div class="col-xs-6 col-sm-5">                        <select [(ngModel)]="ExpirationMonth" name="ExpirationMonth" class="form-control">                            <option value="0">Month</option>                            <option value="1">January</option>                            <option value="2">Febuary</option>                            <option value="3">March</option>                            <option value="4">April</option>                            <option value="5">May</option>                            <option value="6">June</option>                            <option value="7">July</option>                            <option value="8">August</option>                            <option value="9">September</option>                            <option value="10">October</option>                            <option value="11">November</option>                            <option value="12">December</option>                        </select>                    </div>                                      <div class="col-xs-6 col-sm-5">                        <select [(ngModel)]="ExpirationYear" name="ExpirationYear" class="form-control">                            <option value="0">Year</option>                            <option value="2017">2017</option>                            <option value="2018">2018</option>                            <option value="2019">2019</option>                            <option value="2020">2020</option>                            <option value="2021">2021</option>                            <option value="2022">2022</option>                            <option value="2023">2023</option>                            <option value="2024">2024</option>                            <option value="2025">2025</option>                        </select>                    </div>                </div>            </div>        </div>        <div class="text-center">            <button (click)="back();" class="btn btn-danger">Back</button>            <button (click)="continue();" class="btn btn-deafult">Continue</button>        </div>    </form></div>';
}