class Bank{


    constructor(bank_name,location,account_no,ifsc,interest_rate){
        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate;
    }
    }
    const axis_bank=new Bank("Axis bank","Pune",458565,'Axis156545',"83%");
    const sbi_bank=new Bank("SBI Bank","nashik",985258,'SBIN135852',"11%");
    const icici_bank=new Bank("ICICI Bank","dhule",785615,'ICI200545',"49%");
    const kotak_bank=new Bank("Kotak Bank","raigad",258541,'KTK180045',"58%");
    const hdfc_bank=new Bank("HDFC Bank","satara",542562,'HDFC002454',"16%");
    const punjab_bank=new Bank("Punjab Bank","vardha",552655,'PUN156545',"83%");

    const map=new Map();
    map.set('Axis156545',axis_bank);
    map.set('SBIN135852',sbi_bank);
    map.set('ICI200545',icici_bank);
    map.set('KTK180045',kotak_bank);
    map.set('HDFC002454',hdfc_bank);
    map.set('PUN156545',punjab_bank);

    const totalKeys=map.keys();


    for (const key of totalKeys) {
        const bank=map.get(key);
        console.log(`Bank Name: ${bank.bank_name}, Account No.: ${bank.account_no}, Interest-Rate: ${bank.interest_rate}`);
    }