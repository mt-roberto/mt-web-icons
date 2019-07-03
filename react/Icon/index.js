import * as React from 'react';
import toPascalCase from 'to-pascal-case';
const {
  Suspense,
  lazy
} = React;

function getModule(name) {
  switch (name) {
    // Switch statement example:
    //
    // ======
    // case 'Baloon':
    //   return lazy(() => import('../icons/Baloon.jsx');
    //   break;
    //
    case 'AdvertisingExpense':
      return lazy(() => import('../AdvertisingExpense'));
      break;

    case 'AirFare':
      return lazy(() => import('../AirFare'));
      break;

    case 'AirTravel':
      return lazy(() => import('../AirTravel'));
      break;

    case 'Allowance':
      return lazy(() => import('../Allowance'));
      break;

    case 'Alphabet':
      return lazy(() => import('../Alphabet'));
      break;

    case 'AmusementPark':
      return lazy(() => import('../AmusementPark'));
      break;

    case 'Anchor':
      return lazy(() => import('../Anchor'));
      break;

    case 'Arcade':
      return lazy(() => import('../Arcade'));
      break;

    case 'AtmDeposit':
      return lazy(() => import('../AtmDeposit'));
      break;

    case 'AtmFee':
      return lazy(() => import('../AtmFee'));
      break;

    case 'AttorneyFee':
      return lazy(() => import('../AttorneyFee'));
      break;

    case 'Auto':
      return lazy(() => import('../Auto'));
      break;

    case 'AutoInsurance':
      return lazy(() => import('../AutoInsurance'));
      break;

    case 'BankFee':
      return lazy(() => import('../BankFee'));
      break;

    case 'Beauty':
      return lazy(() => import('../Beauty'));
      break;

    case 'BenefitsWelfareExpenses':
      return lazy(() => import('../BenefitsWelfareExpenses'));
      break;

    case 'Bin':
      return lazy(() => import('../Bin'));
      break;

    case 'Bonus':
      return lazy(() => import('../Bonus'));
      break;

    case 'BookCost':
      return lazy(() => import('../BookCost'));
      break;

    case 'BooksMagazines':
      return lazy(() => import('../BooksMagazines'));
      break;

    case 'BooksSupplies':
      return lazy(() => import('../BooksSupplies'));
      break;

    case 'Bucket':
      return lazy(() => import('../Bucket'));
      break;

    case 'Bug':
      return lazy(() => import('../Bug'));
      break;

    case 'Bulb':
      return lazy(() => import('../Bulb'));
      break;

    case 'Bus':
      return lazy(() => import('../Bus'));
      break;

    case 'BusFare':
      return lazy(() => import('../BusFare'));
      break;

    case 'BusinessExpense':
      return lazy(() => import('../BusinessExpense'));
      break;

    case 'BusinessTripFee':
      return lazy(() => import('../BusinessTripFee'));
      break;

    case 'Buy':
      return lazy(() => import('../Buy'));
      break;

    case 'CafeCoffeeShop':
      return lazy(() => import('../CafeCoffeeShop'));
      break;

    case 'Calender':
      return lazy(() => import('../Calender'));
      break;

    case 'CardPayment':
      return lazy(() => import('../CardPayment'));
      break;

    case 'CashAtm':
      return lazy(() => import('../CashAtm'));
      break;

    case 'CashGift':
      return lazy(() => import('../CashGift'));
      break;

    case 'Charity':
      return lazy(() => import('../Charity'));
      break;

    case 'Children':
      return lazy(() => import('../Children'));
      break;

    case 'Clothing':
      return lazy(() => import('../Clothing'));
      break;

    case 'CommunicationCost':
      return lazy(() => import('../CommunicationCost'));
      break;

    case 'Communications':
      return lazy(() => import('../Communications'));
      break;

    case 'Compass':
      return lazy(() => import('../Compass'));
      break;

    case 'Connection':
      return lazy(() => import('../Connection'));
      break;

    case 'ConsumableSuppliesExpenses':
      return lazy(() => import('../ConsumableSuppliesExpenses'));
      break;

    case 'ConvenienceStore':
      return lazy(() => import('../ConvenienceStore'));
      break;

    case 'CorpAccountTransfer':
      return lazy(() => import('../CorpAccountTransfer'));
      break;

    case 'CorpAds':
      return lazy(() => import('../CorpAds'));
      break;

    case 'CorpBenefits':
      return lazy(() => import('../CorpBenefits'));
      break;

    case 'CorpComm':
      return lazy(() => import('../CorpComm'));
      break;

    case 'CorpConsumptionTaxPayment':
      return lazy(() => import('../CorpConsumptionTaxPayment'));
      break;

    case 'CorpConsumptionTaxRefund':
      return lazy(() => import('../CorpConsumptionTaxRefund'));
      break;

    case 'CorpDebt':
      return lazy(() => import('../CorpDebt'));
      break;

    case 'CorpDelivery':
      return lazy(() => import('../CorpDelivery'));
      break;

    case 'CorpEntertainment':
      return lazy(() => import('../CorpEntertainment'));
      break;

    case 'CorpFixedAssets':
      return lazy(() => import('../CorpFixedAssets'));
      break;

    case 'CorpInsurance':
      return lazy(() => import('../CorpInsurance'));
      break;

    case 'CorpInterestExpenses':
      return lazy(() => import('../CorpInterestExpenses'));
      break;

    case 'CorpInterestReceived':
      return lazy(() => import('../CorpInterestReceived'));
      break;

    case 'CorpInterestReceivedCopy':
      return lazy(() => import('../CorpInterestReceivedCopy'));
      break;

    case 'CorpInvestment':
      return lazy(() => import('../CorpInvestment'));
      break;

    case 'CorpLoan':
      return lazy(() => import('../CorpLoan'));
      break;

    case 'CorpMisc':
      return lazy(() => import('../CorpMisc'));
      break;

    case 'CorpOutsource':
      return lazy(() => import('../CorpOutsource'));
      break;

    case 'CorpPurchase':
      return lazy(() => import('../CorpPurchase'));
      break;

    case 'CorpRent':
      return lazy(() => import('../CorpRent'));
      break;

    case 'CorpRepair':
      return lazy(() => import('../CorpRepair'));
      break;

    case 'CorpSalary':
      return lazy(() => import('../CorpSalary'));
      break;

    case 'CorpSales':
      return lazy(() => import('../CorpSales'));
      break;

    case 'CorpSundryTaxes':
      return lazy(() => import('../CorpSundryTaxes'));
      break;

    case 'CorpSupplies':
      return lazy(() => import('../CorpSupplies'));
      break;

    case 'CorpTaxPayment':
      return lazy(() => import('../CorpTaxPayment'));
      break;

    case 'CorpTravel':
      return lazy(() => import('../CorpTravel'));
      break;

    case 'CorpUtilities':
      return lazy(() => import('../CorpUtilities'));
      break;

    case 'Cosmetics':
      return lazy(() => import('../Cosmetics'));
      break;

    case 'Daycare':
      return lazy(() => import('../Daycare'));
      break;

    case 'DebtRepayment':
      return lazy(() => import('../DebtRepayment'));
      break;

    case 'DeliveryCost':
      return lazy(() => import('../DeliveryCost'));
      break;

    case 'Dentist':
      return lazy(() => import('../Dentist'));
      break;

    case 'Dice':
      return lazy(() => import('../Dice'));
      break;

    case 'DividendCapGains':
      return lazy(() => import('../DividendCapGains'));
      break;

    case 'Doctor':
      return lazy(() => import('../Doctor'));
      break;

    case 'DownloadFromCloud':
      return lazy(() => import('../DownloadFromCloud'));
      break;

    case 'Drops':
      return lazy(() => import('../Drops'));
      break;

    case 'EatingOut':
      return lazy(() => import('../EatingOut'));
      break;

    case 'Education':
      return lazy(() => import('../Education'));
      break;

    case 'Electricity':
      return lazy(() => import('../Electricity'));
      break;

    case 'ElectricityBill':
      return lazy(() => import('../ElectricityBill'));
      break;

    case 'Electronics':
      return lazy(() => import('../Electronics'));
      break;

    case 'Elephant':
      return lazy(() => import('../Elephant'));
      break;

    case 'Employeetravelfee':
      return lazy(() => import('../Employeetravelfee'));
      break;

    case 'EmploymentInsurancePremium':
      return lazy(() => import('../EmploymentInsurancePremium'));
      break;

    case 'Entertainment':
      return lazy(() => import('../Entertainment'));
      break;

    case 'EntertainmentExpenses':
      return lazy(() => import('../EntertainmentExpenses'));
      break;

    case 'Exclude':
      return lazy(() => import('../Exclude'));
      break;

    case 'Eyecare':
      return lazy(() => import('../Eyecare'));
      break;

    case 'Fastfood':
      return lazy(() => import('../Fastfood'));
      break;

    case 'Fees':
      return lazy(() => import('../Fees'));
      break;

    case 'FinancialServices':
      return lazy(() => import('../FinancialServices'));
      break;

    case 'Fire':
      return lazy(() => import('../Fire'));
      break;

    case 'Flashlight':
      return lazy(() => import('../Flashlight'));
      break;

    case 'Flower':
      return lazy(() => import('../Flower'));
      break;

    case 'Folder':
      return lazy(() => import('../Folder'));
      break;

    case 'Fuel':
      return lazy(() => import('../Fuel'));
      break;

    case 'Games':
      return lazy(() => import('../Games'));
      break;

    case 'Gas':
      return lazy(() => import('../Gas'));
      break;

    case 'GenderFemale':
      return lazy(() => import('../GenderFemale'));
      break;

    case 'GenderMale':
      return lazy(() => import('../GenderMale'));
      break;

    case 'GiftItemFee':
      return lazy(() => import('../GiftItemFee'));
      break;

    case 'GiftsDonations':
      return lazy(() => import('../GiftsDonations'));
      break;

    case 'Glasses':
      return lazy(() => import('../Glasses'));
      break;

    case 'Groceries':
      return lazy(() => import('../Groceries'));
      break;

    case 'GymFitness':
      return lazy(() => import('../GymFitness'));
      break;

    case 'HealthInsurancePremium':
      return lazy(() => import('../HealthInsurancePremium'));
      break;

    case 'HealthMedical':
      return lazy(() => import('../HealthMedical'));
      break;

    case 'Heart':
      return lazy(() => import('../Heart'));
      break;

    case 'HolidayLeisure':
      return lazy(() => import('../HolidayLeisure'));
      break;

    case 'Home':
      return lazy(() => import('../Home'));
      break;

    case 'HomeImprovement':
      return lazy(() => import('../HomeImprovement'));
      break;

    case 'HomeInsurance':
      return lazy(() => import('../HomeInsurance'));
      break;

    case 'HomePhone':
      return lazy(() => import('../HomePhone'));
      break;

    case 'HomeRent':
      return lazy(() => import('../HomeRent'));
      break;

    case 'HomeSupplies':
      return lazy(() => import('../HomeSupplies'));
      break;

    case 'Hotel':
      return lazy(() => import('../Hotel'));
      break;

    case 'HousekeepingConsumption':
      return lazy(() => import('../HousekeepingConsumption'));
      break;

    case 'IncomeAmount':
      return lazy(() => import('../IncomeAmount'));
      break;

    case 'InsufficientFundsO':
      return lazy(() => import('../InsufficientFundsO'));
      break;

    case 'InterestCharge':
      return lazy(() => import('../InterestCharge'));
      break;

    case 'InterestDiscountFee':
      return lazy(() => import('../InterestDiscountFee'));
      break;

    case 'InterestIncome':
      return lazy(() => import('../InterestIncome'));
      break;

    case 'Internet':
      return lazy(() => import('../Internet'));
      break;

    case 'InternetFee':
      return lazy(() => import('../InternetFee'));
      break;

    case 'Investments':
      return lazy(() => import('../Investments'));
      break;

    case 'Invisible':
      return lazy(() => import('../Invisible'));
      break;

    case 'Ipad':
      return lazy(() => import('../Ipad'));
      break;

    case 'Ipod':
      return lazy(() => import('../Ipod'));
      break;

    case 'IzakayaBars':
      return lazy(() => import('../IzakayaBars'));
      break;

    case 'JudicialScrivenerFee':
      return lazy(() => import('../JudicialScrivenerFee'));
      break;

    case 'Karaoke':
      return lazy(() => import('../Karaoke'));
      break;

    case 'Key':
      return lazy(() => import('../Key'));
      break;

    case 'Leaf':
      return lazy(() => import('../Leaf'));
      break;

    case 'Legal':
      return lazy(() => import('../Legal'));
      break;

    case 'Life':
      return lazy(() => import('../Life'));
      break;

    case 'LifeInsurance':
      return lazy(() => import('../LifeInsurance'));
      break;

    case 'Like':
      return lazy(() => import('../Like'));
      break;

    case 'Lock':
      return lazy(() => import('../Lock'));
      break;

    case 'Love':
      return lazy(() => import('../Love'));
      break;

    case 'Lunch':
      return lazy(() => import('../Lunch'));
      break;

    case 'Media':
      return lazy(() => import('../Media'));
      break;

    case 'Megaphone':
      return lazy(() => import('../Megaphone'));
      break;

    case 'Message':
      return lazy(() => import('../Message'));
      break;

    case 'MiscellaneousExpenses':
      return lazy(() => import('../MiscellaneousExpenses'));
      break;

    case 'MobilePhone':
      return lazy(() => import('../MobilePhone'));
      break;

    case 'More':
      return lazy(() => import('../More'));
      break;

    case 'Movies':
      return lazy(() => import('../Movies'));
      break;

    case 'MuseumTheatre':
      return lazy(() => import('../MuseumTheatre'));
      break;

    case 'Music':
      return lazy(() => import('../Music'));
      break;

    case 'NewspaperFee':
      return lazy(() => import('../NewspaperFee'));
      break;

    case 'Nexus':
      return lazy(() => import('../Nexus'));
      break;

    case 'OfficeEquipment':
      return lazy(() => import('../OfficeEquipment'));
      break;

    case 'OfficeSupplies':
      return lazy(() => import('../OfficeSupplies'));
      break;

    case 'Omiyage':
      return lazy(() => import('../Omiyage'));
      break;

    case 'OnlineService':
      return lazy(() => import('../OnlineService'));
      break;

    case 'Onsen':
      return lazy(() => import('../Onsen'));
      break;

    case 'OtherIncome':
      return lazy(() => import('../OtherIncome'));
      break;

    case 'OtherInsurance':
      return lazy(() => import('../OtherInsurance'));
      break;

    case 'OutsourcedLabor':
      return lazy(() => import('../OutsourcedLabor'));
      break;

    case 'PackingFreight':
      return lazy(() => import('../PackingFreight'));
      break;

    case 'Paper':
      return lazy(() => import('../Paper'));
      break;

    case 'Parking':
      return lazy(() => import('../Parking'));
      break;

    case 'ParkingFee':
      return lazy(() => import('../ParkingFee'));
      break;

    case 'Pediatrician':
      return lazy(() => import('../Pediatrician'));
      break;

    case 'PersonalCare':
      return lazy(() => import('../PersonalCare'));
      break;

    case 'Pets':
      return lazy(() => import('../Pets'));
      break;

    case 'Pharmacy':
      return lazy(() => import('../Pharmacy'));
      break;

    case 'Photo':
      return lazy(() => import('../Photo'));
      break;

    case 'Pie':
      return lazy(() => import('../Pie'));
      break;

    case 'Pin':
      return lazy(() => import('../Pin'));
      break;

    case 'Points':
      return lazy(() => import('../Points'));
      break;

    case 'Portfolio':
      return lazy(() => import('../Portfolio'));
      break;

    case 'PostageExpense':
      return lazy(() => import('../PostageExpense'));
      break;

    case 'Printing':
      return lazy(() => import('../Printing'));
      break;

    case 'PropertyInsurancePremium':
      return lazy(() => import('../PropertyInsurancePremium'));
      break;

    case 'RDExpenses':
      return lazy(() => import('../RDExpenses'));
      break;

    case 'RecruitmentFee':
      return lazy(() => import('../RecruitmentFee'));
      break;

    case 'Rent':
      return lazy(() => import('../Rent'));
      break;

    case 'RentalCar':
      return lazy(() => import('../RentalCar'));
      break;

    case 'RentalIncome':
      return lazy(() => import('../RentalIncome'));
      break;

    case 'RepairCosts':
      return lazy(() => import('../RepairCosts'));
      break;

    case 'ResidencyTax':
      return lazy(() => import('../ResidencyTax'));
      break;

    case 'Restaurant':
      return lazy(() => import('../Restaurant'));
      break;

    case 'Salary':
      return lazy(() => import('../Salary'));
      break;

    case 'SalaryWage':
      return lazy(() => import('../SalaryWage'));
      break;

    case 'SalesAmount':
      return lazy(() => import('../SalesAmount'));
      break;

    case 'SchoolFees':
      return lazy(() => import('../SchoolFees'));
      break;

    case 'Sell':
      return lazy(() => import('../Sell'));
      break;

    case 'Sent':
      return lazy(() => import('../Sent'));
      break;

    case 'Service':
      return lazy(() => import('../Service'));
      break;

    case 'Shipping':
      return lazy(() => import('../Shipping'));
      break;

    case 'Shoes':
      return lazy(() => import('../Shoes'));
      break;

    case 'Shopping':
      return lazy(() => import('../Shopping'));
      break;

    case 'Shrimp':
      return lazy(() => import('../Shrimp'));
      break;

    case 'Smoking':
      return lazy(() => import('../Smoking'));
      break;

    case 'Software':
      return lazy(() => import('../Software'));
      break;

    case 'Sparrow':
      return lazy(() => import('../Sparrow'));
      break;

    case 'Splat':
      return lazy(() => import('../Splat'));
      break;

    case 'SportingGoods':
      return lazy(() => import('../SportingGoods'));
      break;

    case 'Spruce':
      return lazy(() => import('../Spruce'));
      break;

    case 'Square':
      return lazy(() => import('../Square'));
      break;

    case 'StampFee':
      return lazy(() => import('../StampFee'));
      break;

    case 'Star':
      return lazy(() => import('../Star'));
      break;

    case 'Clear':
      return lazy(() => import('../Clear'));
      break;

    case 'Strawberry':
      return lazy(() => import('../Strawberry'));
      break;

    case 'StudentLoan':
      return lazy(() => import('../StudentLoan'));
      break;

    case 'TaxAccountantFee':
      return lazy(() => import('../TaxAccountantFee'));
      break;

    case 'TaxAndPublicDuty':
      return lazy(() => import('../TaxAndPublicDuty'));
      break;

    case 'TaxFee':
      return lazy(() => import('../TaxFee'));
      break;

    case 'TaxRegistration':
      return lazy(() => import('../TaxRegistration'));
      break;

    case 'Taxes':
      return lazy(() => import('../Taxes'));
      break;

    case 'Taxi':
      return lazy(() => import('../Taxi'));
      break;

    case 'TaxiFare':
      return lazy(() => import('../TaxiFare'));
      break;

    case 'TelephoneBill':
      return lazy(() => import('../TelephoneBill'));
      break;

    case 'Television':
      return lazy(() => import('../Television'));
      break;

    case 'Theater':
      return lazy(() => import('../Theater'));
      break;

    case 'Timer':
      return lazy(() => import('../Timer'));
      break;

    case 'TollRoadFee':
      return lazy(() => import('../TollRoadFee'));
      break;

    case 'Tollway':
      return lazy(() => import('../Tollway'));
      break;

    case 'Tone':
      return lazy(() => import('../Tone'));
      break;

    case 'Train':
      return lazy(() => import('../Train'));
      break;

    case 'TrainFare':
      return lazy(() => import('../TrainFare'));
      break;

    case 'Transfer':
      return lazy(() => import('../Transfer'));
      break;

    case 'TransferFee':
      return lazy(() => import('../TransferFee'));
      break;

    case 'Transport':
      return lazy(() => import('../Transport'));
      break;

    case 'TravelExpenses':
      return lazy(() => import('../TravelExpenses'));
      break;

    case 'Tuition':
      return lazy(() => import('../Tuition'));
      break;

    case 'Uinlocked':
      return lazy(() => import('../Uinlocked'));
      break;

    case 'Uncategorized':
      return lazy(() => import('../Uncategorized'));
      break;

    case 'Utilities':
      return lazy(() => import('../Utilities'));
      break;

    case 'Video':
      return lazy(() => import('../Video'));
      break;

    case 'Visible':
      return lazy(() => import('../Visible'));
      break;

    case 'WarehouseCost':
      return lazy(() => import('../WarehouseCost'));
      break;

    case 'Water':
      return lazy(() => import('../Water'));
      break;

    case 'WaterBill':
      return lazy(() => import('../WaterBill'));
      break;

    case 'WaterUtilityExpenses':
      return lazy(() => import('../WaterUtilityExpenses'));
      break;

    case 'WelfarePensionInsurancePremium':
      return lazy(() => import('../WelfarePensionInsurancePremium'));
      break;

    case 'Window':
      return lazy(() => import('../Window'));
      break;

    case 'WorkersCompensationInsurancePremium':
      return lazy(() => import('../WorkersCompensationInsurancePremium'));
      break;

    case 'AllAccounts':
      return lazy(() => import('../AllAccounts'));
      break;

    case 'Application':
      return lazy(() => import('../Application'));
      break;

    case 'Back':
      return lazy(() => import('../Back'));
      break;

    case 'Check':
      return lazy(() => import('../Check'));
      break;

    case 'ChevronDown':
      return lazy(() => import('../ChevronDown'));
      break;

    case 'ChevronLeft':
      return lazy(() => import('../ChevronLeft'));
      break;

    case 'ChevronRight':
      return lazy(() => import('../ChevronRight'));
      break;

    case 'ChevronUp':
      return lazy(() => import('../ChevronUp'));
      break;

    case 'Cross':
      return lazy(() => import('../Cross'));
      break;

    case 'Error':
      return lazy(() => import('../Error'));
      break;

    case 'ExternalLink':
      return lazy(() => import('../ExternalLink'));
      break;

    case 'Forward':
      return lazy(() => import('../Forward'));
      break;

    case 'InstitutionBank':
      return lazy(() => import('../InstitutionBank'));
      break;

    case 'InstitutionCorporate':
      return lazy(() => import('../InstitutionCorporate'));
      break;

    case 'InstitutionCreditCard':
      return lazy(() => import('../InstitutionCreditCard'));
      break;

    case 'InstitutionManual':
      return lazy(() => import('../InstitutionManual'));
      break;

    case 'InstitutionPoint':
      return lazy(() => import('../InstitutionPoint'));
      break;

    case 'InstitutionStock':
      return lazy(() => import('../InstitutionStock'));
      break;

    case 'InstitutionStoredValue':
      return lazy(() => import('../InstitutionStoredValue'));
      break;

    case 'Logo':
      return lazy(() => import('../Logo'));
      break;

    case 'Logotype':
      return lazy(() => import('../Logotype'));
      break;

    case 'NubDown':
      return lazy(() => import('../NubDown'));
      break;

    case 'NubLeft':
      return lazy(() => import('../NubLeft'));
      break;

    case 'NubRight':
      return lazy(() => import('../NubRight'));
      break;

    case 'NubUp':
      return lazy(() => import('../NubUp'));
      break;

    case 'Organization':
      return lazy(() => import('../Organization'));
      break;

    case 'Plus':
      return lazy(() => import('../Plus'));
      break;

    case 'Question':
      return lazy(() => import('../Question'));
      break;

    case 'Refresh':
      return lazy(() => import('../Refresh'));
      break;

    case 'ScopeAccountsRead':
      return lazy(() => import('../ScopeAccountsRead'));
      break;

    case 'ScopeCategoriesRead':
      return lazy(() => import('../ScopeCategoriesRead'));
      break;

    case 'ScopeCategoriesWrite':
      return lazy(() => import('../ScopeCategoriesWrite'));
      break;

    case 'ScopeExpenseClaimsRead':
      return lazy(() => import('../ScopeExpenseClaimsRead'));
      break;

    case 'ScopeExpenseClaimsWrite':
      return lazy(() => import('../ScopeExpenseClaimsWrite'));
      break;

    case 'ScopeGuestRead':
      return lazy(() => import('../ScopeGuestRead'));
      break;

    case 'ScopeInvestmentAccountsRead':
      return lazy(() => import('../ScopeInvestmentAccountsRead'));
      break;

    case 'ScopeInvestmentTransactionsRead':
      return lazy(() => import('../ScopeInvestmentTransactionsRead'));
      break;

    case 'ScopeLifeInsuranceRead':
      return lazy(() => import('../ScopeLifeInsuranceRead'));
      break;

    case 'ScopeNotificationsRead':
      return lazy(() => import('../ScopeNotificationsRead'));
      break;

    case 'ScopePointTransactionsRead':
      return lazy(() => import('../ScopePointTransactionsRead'));
      break;

    case 'ScopePointsRead':
      return lazy(() => import('../ScopePointsRead'));
      break;

    case 'ScopeRequestRefresh':
      return lazy(() => import('../ScopeRequestRefresh'));
      break;

    case 'ScopeTransactionsRead':
      return lazy(() => import('../ScopeTransactionsRead'));
      break;

    case 'ScopeTransactionsWrite':
      return lazy(() => import('../ScopeTransactionsWrite'));
      break;

    case 'Search':
      return lazy(() => import('../Search'));
      break;

    case 'Settings':
      return lazy(() => import('../Settings'));
      break;

    case 'StatusError':
      return lazy(() => import('../StatusError'));
      break;

    case 'StatusRefresh':
      return lazy(() => import('../StatusRefresh'));
      break;

    case 'StatusUpdated':
      return lazy(() => import('../StatusUpdated'));
      break;

    default:
      return;
      break;
  }
}

export default function Icon(props) {
  const {
    name,
    width = 24,
    height = 24,
    fallback = null,
    placeholder = React.createElement("div", {
      style: {
        borderRadius: 100,
        backgroundColor: '#000',
        width: `${width}px`,
        height: `${height}px`
      }
    })
  } = props;
  const IconComponent = getModule(toPascalCase(name));
  return React.createElement(Suspense, {
    fallback: fallback
  }, IconComponent && React.createElement(IconComponent, props) || placeholder);
}