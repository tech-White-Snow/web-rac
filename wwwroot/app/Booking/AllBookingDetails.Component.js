"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Booking_Service_1 = require("../Booking/Services/Booking.Service");
var router_1 = require("@angular/router");
var ng2_progressbar_1 = require("ng2-progressbar");
var AllBookingDetails = (function () {
    function AllBookingDetails(_bookingservice, pService, _Route) {
        this._bookingservice = _bookingservice;
        this.pService = pService;
        this._Route = _Route;
    }
    AllBookingDetails.prototype.ngOnInit = function () {
        var _this = this;
        this._bookingservice
            .GetAllBookingDetails()
            .subscribe(function (data) { return _this.bookingmodel = data; }, function (error) {
            if (error) {
                alert("An Error has occured please try again after some time !");
            }
        });
    };
    return AllBookingDetails;
}());
AllBookingDetails = __decorate([
    core_1.Component({
        templateUrl: 'app/Booking/AllBookingDetails.html',
        providers: [Booking_Service_1.BookingService]
    }),
    __metadata("design:paramtypes", [Booking_Service_1.BookingService, ng2_progressbar_1.NgProgressService, router_1.Router])
], AllBookingDetails);
exports.AllBookingDetails = AllBookingDetails;
//# sourceMappingURL=AllBookingDetails.Component.js.map