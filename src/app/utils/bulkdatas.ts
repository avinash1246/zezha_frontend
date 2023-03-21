export class bulkdatas {
    constructor() { }
    states!:any;
    cities!:any;
    ugdegrees!:any;
    pgdegrees!:any;
    doSomething(): void {
      console.log('Hello from MyClass!');
      //state
      this.states = [
        { name: 'Andhra Pradesh', value: 'Andhra Pradesh' },
        { name: 'Assam', value: 'Assam' },
        { name: 'Bihar', value: 'Bihar' },
        { name: 'Chhattisgarh', value: 'Chhattisgarh' },
        { name: 'Goa', value: 'Goa' },
        { name: 'Gujarat', value: 'Gujarat' },
        { name: 'Haryana', value: 'Haryana' },
        { name: 'Himachal Pradesh', value: 'Himachal Pradesh' },
        { name: 'Jharkhand', value: 'Jharkhand' },
        { name: 'Karnataka', value: 'Karnataka' },
        { name: 'Kerala', value: 'Kerala' },
        { name: 'Madhya Pradesh', value: 'Madhya Pradesh' },
        { name: 'Maharashtra', value: 'Maharashtra' },
        { name: 'Manipur', value: 'Manipur' },
        { name: 'Meghalaya', value: 'Meghalaya' },
        { name: 'Mizoram', value: 'Mizoram' },
        { name: 'Nagaland', value: 'Nagaland' },
        { name: 'Odisha', value: 'Odisha' },
        { name: 'Punjab', value: 'Punjab' },
        { name: 'Rajasthan', value: 'Rajasthan' },
        { name: 'Sikkim', value: 'Sikkim' },
        { name: 'Tamil Nadu', value: 'Tamil Nadu' },
        { name: 'Telangana', value: 'Telangana' },
        { name: 'Tripura', value: 'Tripura' },
        { name: 'Uttar Pradesh', value: 'Uttar Pradesh' },
        { name: 'Uttarakhand', value: 'Uttarakhand' },
        { name: 'West Bengal', value: 'West Bengal' },
        { name: 'Andaman and Nicobar Islands', value: 'Andaman and Nicobar Islands' },
        { name: 'Chandigarh', value: 'Chandigarh' },
        { name: 'Dadra and Nagar Haveli and Daman and Diu', value: 'Dadra and Nagar Haveli and Daman and Diu' },
        { name: 'Lakshadweep', value: 'Lakshadweep' },
        { name: 'Delhi', value: 'Delhi' },
        { name: 'Pondicherry', value: 'Pondicherry' },
        { name: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
        { name: 'Ladakh', value: 'Ladakh' }
      ];


        //city
        this.cities =[
          {
            name: 'Andhra Pradesh',
            cities: [
              { name: 'Anantapur',value:'Anantapur' },
        { name: 'Chittoor',value:'Chittoor' },
        { name: 'East Godavari',value:'East Godavari' },
        { name: 'Guntur',value:'Guntur' },
        { name: 'Krishna',value:'Krishna' },
        { name: 'Kurnool',value:'Kurnool' },
        { name: 'Nellore',value:'Nellore' },
        { name: 'Prakasam',value:'Prakasam' },
        { name: 'Srikakulam',value:'Srikakulam' },
        { name: 'Visakhapatnam',value:'Visakhapatnam' },
        { name: 'Vizianagaram',value:'Vizianagaram' },
        { name: 'West Godavari',value:'West Godavari' },
        { name: 'YSR Kadapa',value:'YSR Kadapa' },
        
         
            ]
          },
          {
            name: 'Assam',
            cities: [
              { name: 'Baksa',value:'Baksa' },
        { name: 'Barpeta',value:'Barpeta' },
        { name: 'Biswanath',value:'Biswanath' },
        { name: 'Bongaigaon',value:'Bongaigaon' },
        { name: 'Cachar',value:'Cachar' },
        { name: 'Charaideo',value:'Charaideo' },
        { name: 'Chirang',value:'Chirang' },
        { name: 'Darrang',value:'Darrang' },
        { name: 'Dhemaji',value:'Dhemaji' },
        { name: 'Dhubri',value:'Dhubri' },
        { name: 'Dibrugarh',value:'Dibrugarh' },
        { name: 'Dima Hasao (North Cachar Hills)',value:'Dima Hasao (North Cachar Hills)' },
        { name: 'Goalpara',value:'Goalpara' },
        { name: 'Golaghat',value:'Golaghat' },
        { name: 'Hailakandi',value:'Hailakandi' },
        { name: 'Hojai',value:'Hojai' },
        { name: 'Jorhat',value:'Jorhat' },
        { name: 'Kamrup Metropolitan',value:'Kamrup Metropolitan' },
        { name: 'Kamrup',value:'Kamrup' },
        { name: 'Karbi Anglong',value:'Karbi Anglong' },
        { name: 'Karimganj',value:'Karimganj' },
        { name: 'Kokrajhar',value:'Kokrajhar' },
        { name: 'Lakhimpur',value:'Lakhimpur' },
        { name: 'Majuli',value:'Majuli' },
        { name: 'Morigaon',value:'Morigaon' },
        { name: 'Nagaon',value:'Nagaon' },
        { name: 'Nalbari',value:'Nalbari' },
        { name: 'Sivasagar',value:'Sivasagar' },
        { name: 'Sonitpur',value:'Sonitpur' },
        { name: 'South Salmara-Mankachar',value:'South Salmara-Mankachar' },
        { name: 'Tinsukia',value:'Tinsukia' },
        { name: 'Udalguri',value:'Udalguri' },
        { name: 'West Karbi Anglong',value:'West Karbi Anglong' },
        
        
             
            ]
          },
          {
            name: 'Bihar',
            cities: [
              { name: 'Araria',value:'Araria' },
        { name: 'Arwal',value:'Arwal' },
        { name: 'Aurangabad',value:'Aurangabad' },
        { name: 'Banka',value:'Banka' },
        { name: 'Begusarai',value:'Begusarai' },
        { name: 'Bhagalpur',value:'Bhagalpur' },
        { name: 'Bhojpur',value:'Bhojpur' },
        { name: 'Buxar',value:'Buxar' },
        { name: 'Darbhanga',value:'Darbhanga' },
        { name: 'East Champaran (Motihari)',value:'East Champaran (Motihari)' },
        { name: 'Gaya',value:'Gaya' },
        { name: 'Gopalganj',value:'Gopalganj' },
        { name: 'Jamui',value:'Jamui' },
        { name: 'Jehanabad',value:'Jehanabad' },
        { name: 'Kaimur (Bhabua)',value:'Kaimur (Bhabua)' },
        { name: 'Katihar',value:'Katihar' },
        { name: 'Khagaria',value:'Khagaria' },
        { name: 'Kishanganj',value:'Kishanganj' },
        { name: 'Lakhisarai',value:'Lakhisarai' },
        { name: 'Madhepura',value:'Madhepura' },
        { name: 'Madhubani',value:'Madhubani' },
        { name: 'Munger (Monghyr)',value:'Munger (Monghyr)' },
        { name: 'Muzaffarpur',value:'Muzaffarpur' },
        { name: 'Nalanda',value:'Nalanda' },
        { name: 'Nawada',value:'Nawada' },
        { name: 'Patna',value:'Patna' },
        { name: 'Purnia (Purnea)',value:'Purnia (Purnea)' },
        { name: 'Rohtas',value:'Rohtas' },
        { name: 'Saharsa',value:'Saharsa' },
        { name: 'Samastipur',value:'Samastipur' },
        { name: 'Saran',value:'Saran' },
        { name: 'Sheikhpura',value:'Sheikhpura' },
        { name: 'Sheohar',value:'Sheohar' },
        
        
             
            ]
          },
          {
            name: 'Chhattisgarh',
            cities: [
              { name: 'Balod',value:'Balod' },
        { name: 'Baloda Bazar',value:'Baloda Bazar' },
        { name: 'Balrampur',value:'Balrampur' },
        { name: 'Bastar',value:'Bastar' },
        { name: 'Bemetara',value:'Bemetara' },
        { name: 'Bijapur',value:'Bijapur' },
        { name: 'Bilaspur',value:'Bilaspur' },
        { name: 'Dantewada (South Bastar)',value:'Dantewada (South Bastar)' },
        { name: 'Dhamtari',value:'Dhamtari' },
        { name: 'Durg',value:'Durg' },
        { name: 'Gariaband',value:'Gariaband' },
        { name: 'Janjgir-Champa',value:'Janjgir-Champa' },
        { name: 'Jashpur',value:'Jashpur' },
        { name: 'Kabirdham (Kawardha)',value:'Kabirdham (Kawardha)' },
        { name: 'Kanker (North Bastar)',value:'Kanker (North Bastar)' },
        { name: 'Kondagaon',value:'Kondagaon' },
        { name: 'Korba',value:'Korba' },
        { name: 'Korea (Koriya)',value:'Korea (Koriya)' },
        { name: 'Mahasamund',value:'Mahasamund' },
        { name: 'Mungeli',value:'Mungeli' },
        { name: 'Narayanpur',value:'Narayanpur' },
        { name: 'Raigarh',value:'Raigarh' },
        { name: 'Raipur',value:'Raipur' },
        { name: 'Rajnandgaon',value:'Rajnandgaon' },
        { name: 'Sukma',value:'Sukma' },
        { name: 'Surajpur',value:'Surajpur' },
        { name: 'Surguja',value:'Surguja' },
        { name: 'Baloda',value:'Baloda' },
        
        
             
            ]
          },
          {
            name: 'Goa',
            cities: [
              { name: 'North Goa',value:'North Goa' },
        { name: 'South Goa',value:'South Goa' },
        
        
             
            ]
          },
          {
            name: 'Gujarat',
            cities: [
              { name: 'Ahmedabad',value:'Ahmedabad' },
        { name: 'Amreli',value:'Amreli' },
        { name: 'Anand',value:'Anand' },
        { name: 'Aravalli',value:'Aravalli' },
        { name: 'Banaskantha',value:'Banaskantha' },
        { name: 'Bharuch',value:'Bharuch' },
        { name: 'Bhavnagar',value:'Bhavnagar' },
        { name: 'Botad',value:'Botad' },
        { name: 'Chhota Udaipur',value:'Chhota Udaipur' },
        { name: 'Dahod',value:'Dahod' },
        { name: 'Dang',value:'Dang' },
        { name: 'Devbhoomi Dwarka',value:'Devbhoomi Dwarka' },
        { name: 'Gandhinagar',value:'Gandhinagar' },
        { name: 'Gir Somnath',value:'Gir Somnath' },
        { name: 'Jamnagar',value:'Jamnagar' },
        { name: 'Junagadh',value:'Junagadh' },
        { name: 'Kheda',value:'Kheda' },
        { name: 'Kutch',value:'Kutch' },
        { name: 'Mahisagar',value:'Mahisagar' },
        { name: 'Mehsana',value:'Mehsana' },
        { name: 'Morbi',value:'Morbi' },
        { name: 'Narmada',value:'Narmada' },
        { name: 'Navsari',value:'Navsari' },
        { name: 'Panchmahal',value:'Panchmahal' },
        { name: 'Patan',value:'Patan' },
        { name: 'Porbandar',value:'Porbandar' },
        { name: 'Rajkot',value:'Rajkot' },
        { name: 'Sabarkantha',value:'Sabarkantha' },
        { name: 'Surat',value:'Surat' },
        { name: 'Surendranagar',value:'Surendranagar' },
        { name: 'Tapi',value:'Tapi' },
        { name: 'Vadodara',value:'Vadodara' },
        { name: 'Valsad',value:'Valsad' },
        
        
             
            ]
          },{
            name: 'Haryana',
            cities: [
              { name: 'Ambala',value:'Ambala' },
        { name: 'Bhiwani',value:'Bhiwani' },
        { name: 'Charkhi Dadri',value:'Charkhi Dadri' },
        { name: 'Faridabad',value:'Faridabad' },
        { name: 'Fatehabad',value:'Fatehabad' },
        { name: 'Gurugram',value:'Gurugram' },
        { name: 'Hisar',value:'Hisar' },
        { name: 'Jhajjar',value:'Jhajjar' },
        { name: 'Jind',value:'Jind' },
        { name: 'Kaithal',value:'Kaithal' },
        { name: 'Karnal',value:'Karnal' },
        { name: 'Kurukshetra',value:'Kurukshetra' },
        { name: 'Mahendragarh',value:'Mahendragarh' },
        { name: 'Nuh',value:'Nuh' },
        { name: 'Palwal',value:'Palwal' },
        { name: 'Panchkula',value:'Panchkula' },
        { name: 'Panipat',value:'Panipat' },
        { name: 'Rewari',value:'Rewari' },
        { name: 'Rohtak',value:'Rohtak' },
        { name: 'Sirsa',value:'Sirsa' },
        { name: 'Sonipat',value:'Sonipat' },
        { name: 'Yamunanagar',value:'Yamunanagar' },
        
        
             
            ]
          },{
            name: 'Himachal Pradesh',
            cities: [
              { name: 'Bilaspur',value:'Bilaspur' },
        { name: 'Chamba',value:'Chamba' },
        { name: 'Hamirpur',value:'Hamirpur' },
        { name: 'Kangra',value:'Kangra' },
        { name: 'Kinnaur',value:'Kinnaur' },
        { name: 'Kullu',value:'Kullu' },
        { name: 'Lahaul and Spiti',value:'Lahaul and Spiti' },
        { name: 'Mandi',value:'Mandi' },
        { name: 'Shimla',value:'Shimla' },
        { name: 'Sirmaur',value:'Sirmaur' },
        { name: 'Solan',value:'Solan' },
        { name: 'Una',value:'Una' },
        
        
             
            ]
          },{
            name: 'Jharkhand',
            cities: [
              { name: 'Bokaro',value:'Bokaro' },
        { name: 'Chatra',value:'Chatra' },
        { name: 'Deoghar',value:'Deoghar' },
        { name: 'Dhanbad',value:'Dhanbad' },
        { name: 'Dumka',value:'Dumka' },
        { name: 'East Singhbhum',value:'East Singhbhum' },
        { name: 'Garhwa',value:'Garhwa' },
        { name: 'Giridih',value:'Giridih' },
        { name: 'Godda',value:'Godda' },
        { name: 'Gumla',value:'Gumla' },
        { name: 'Hazaribagh',value:'Hazaribagh' },
        { name: 'Jamtara',value:'Jamtara' },
        { name: 'Khunti',value:'Khunti' },
        { name: 'Koderma',value:'Koderma' },
        { name: 'Latehar',value:'Latehar' },
        { name: 'Lohardaga',value:'Lohardaga' },
        { name: 'Pakur',value:'Pakur' },
        { name: 'Palamu',value:'Palamu' },
        { name: 'Ramgarh',value:'Ramgarh' },
        { name: 'Ranchi',value:'Ranchi' },
        { name: 'Sahibganj',value:'Sahibganj' },
        { name: 'Seraikela Kharsawan',value:'Seraikela Kharsawan' },
        { name: 'Simdega',value:'Simdega' },
        { name: 'West Singhbhum',value:'West Singhbhum' },
        
        
             
            ]
          },{
            name: 'Karnataka',
            cities: [
              { name: 'Bagalkot',value:'Bagalkot' },
        { name: 'Ballari (Bellary)',value:'Ballari (Bellary)' },
        { name: 'Belagavi (Belgaum)',value:'Belagavi (Belgaum)' },
        { name: 'Bengaluru (Bangalore) Rural',value:'Bengaluru (Bangalore) Rural' },
        { name: 'Bengaluru (Bangalore) Urban',value:'Bengaluru (Bangalore) Urban' },
        { name: 'Bidar',value:'Bidar' },
        { name: 'Vijayapura (Bijapur)',value:'Vijayapura (Bijapur)' },
        { name: 'Chamarajanagara',value:'Chamarajanagara' },
        { name: 'Chikballapur',value:'Chikballapur' },
        { name: 'Chikkamagaluru (Chikmagalur)',value:'Chikkamagaluru (Chikmagalur)' },
        { name: 'Chitradurga',value:'Chitradurga' },
        { name: 'Dakshina Kannada',value:'Dakshina Kannada' },
        { name: 'Davangere',value:'Davangere' },
        { name: 'Dharwad',value:'Dharwad' },
        { name: 'Gadag',value:'Gadag' },
        { name: 'Kalaburagi (Gulbarga)',value:'Kalaburagi (Gulbarga)' },
        { name: 'Hassan',value:'Hassan' },
        { name: 'Haveri',value:'Haveri' },
        { name: 'Kodagu',value:'Kodagu' },
        { name: 'Kolar',value:'Kolar' },
        { name: 'Koppal',value:'Koppal' },
        { name: 'Mandya',value:'Mandya' },
        { name: 'Mysuru (Mysore)',value:'Mysuru (Mysore)' },
        { name: 'Raichur',value:'Raichur' },
        { name: 'Ramanagara',value:'Ramanagara' },
        { name: 'Shivamogga (Shimoga)',value:'Shivamogga (Shimoga)' },
        { name: 'Tumakuru (Tumkur)',value:'Tumakuru (Tumkur)' },
        { name: 'Udupi',value:'Udupi' },
        { name: 'Uttara Kannada (Karwar)',value:'Uttara Kannada (Karwar)' },
        { name: 'Yadgir',value:'Yadgir' },
        
        
             
            ]
          },{
            name: 'Kerala',
            cities: [
             { name: 'Alappuzha',value:'Alappuzha' },
        { name: 'Ernakulam',value:'Ernakulam' },
        { name: 'Idukki',value:'Idukki' },
        { name: 'Kannur',value:'Kannur' },
        { name: 'Kasaragod',value:'Kasaragod' },
        { name: 'Kollam',value:'Kollam' },
        { name: 'Kottayam',value:'Kottayam' },
        { name: 'Kozhikode',value:'Kozhikode' },
        { name: 'Malappuram',value:'Malappuram' },
        { name: 'Palakkad',value:'Palakkad' },
        { name: 'Pathanamthitta',value:'Pathanamthitta' },
        { name: 'Thiruvananthapuram',value:'Thiruvananthapuram' },
        { name: 'Thrissur',value:'Thrissur' },
        { name: 'Wayanad',value:'Wayanad' },
        
        
             
            ]
          },{
            name: 'Madhya Pradesh',
            cities: [
              { name: 'Agar Malwa',value:'Agar Malwa' },
        { name: 'Alirajpur',value:'Alirajpur' },
        { name: 'Anuppur',value:'Anuppur' },
        { name: 'Ashoknagar',value:'Ashoknagar' },
        { name: 'Balaghat',value:'Balaghat' },
        { name: 'Barwani',value:'Barwani' },
        { name: 'Betul',value:'Betul' },
        { name: 'Bhind',value:'Bhind' },
        { name: 'Bhopal',value:'Bhopal' },
        { name: 'Burhanpur',value:'Burhanpur' },
        { name: 'Chhatarpur',value:'Chhatarpur' },
        { name: 'Chhindwara',value:'Chhindwara' },
        { name: 'Damoh',value:'Damoh' },
        { name: 'Datia',value:'Datia' },
        { name: 'Dewas',value:'Dewas' },
        { name: 'Dhar',value:'Dhar' },
        { name: 'Dindori',value:'Dindori' },
        { name: 'Guna',value:'Guna' },
        { name: 'Gwalior',value:'Gwalior' },
        { name: 'Harda',value:'Harda' },
        { name: 'Hoshangabad',value:'Hoshangabad' },
        { name: 'Indore',value:'Indore' },
        { name: 'Jabalpur',value:'Jabalpur' },
        { name: 'Jhabua',value:'Jhabua' },
        { name: 'Katni',value:'Katni' },
        { name: 'Khandwa',value:'Khandwa' },
        { name: 'Khargone',value:'Khargone' },
        { name: 'Mandla',value:'Mandla' },
        { name: 'Mandsaur',value:'Mandsaur' },
        { name: 'Morena',value:'Morena' },
        { name: 'Narsinghpur',value:'Narsinghpur' },
        { name: 'Neemuch',value:'Neemuch' },
        { name: 'Niwari',value:'Niwari' },
        { name: 'Panna',value:'Panna' },
        { name: 'Raisen',value:'Raisen' },
        { name: 'Rajgarh',value:'Rajgarh' },
        { name: 'Ratlam',value:'Ratlam' },
        { name: 'Rewa',value:'Rewa' },
        { name: 'Sagar',value:'Sagar' },
        { name: 'Satna',value:'Satna' },
        { name: 'Sehore',value:'Sehore' },
        { name: 'Seoni',value:'Seoni' },
        { name: 'Shahdol',value:'Shahdol' },
        { name: 'Shajapur',value:'Shajapur' },
        { name: 'Sheopur',value:'Sheopur' },
        { name: 'Shivpuri',value:'Shivpuri' },
        { name: 'Sidhi',value:'Sidhi' },
        { name: 'Singrauli',value:'Singrauli' },
        { name: 'Tikamgarh',value:'Tikamgarh' },
        { name: 'Ujjain',value:'Ujjain' },
        { name: 'Umaria',value:'Umaria' },
        { name: 'Vidisha',value:'Vidisha' },
        
        
             
            ]
          },
          {
            name: 'Maharashtra',
            cities: [
              { name: 'Ahmednagar',value:'Ahmednagar' },
        { name: 'Akola',value:'Akola' },
        { name: 'Amravati',value:'Amravati' },
        { name: 'Aurangabad',value:'Aurangabad' },
        { name: 'Beed',value:'Beed' },
        { name: 'Bhandara',value:'Bhandara' },
        { name: 'Buldhana',value:'Buldhana' },
        { name: 'Chandrapur',value:'Chandrapur' },
        { name: 'Dhule',value:'Dhule' },
        { name: 'Gadchiroli',value:'Gadchiroli' },
        { name: 'Gondia',value:'Gondia' },
        { name: 'Hingoli',value:'Hingoli' },
        { name: 'Jalgaon',value:'Jalgaon' },
        { name: 'Jalna',value:'Jalna' },
        { name: 'Kolhapur',value:'Kolhapur' },
        { name: 'Latur',value:'Latur' },
        { name: 'Mumbai City',value:'Mumbai City' },
        { name: 'Mumbai Suburban',value:'Mumbai Suburban' },
        { name: 'Nagpur',value:'Nagpur' },
        { name: 'Nanded',value:'Nanded' },
        { name: 'Nandurbar',value:'Nandurbar' },
        { name: 'Nashik',value:'Nashik' },
        { name: 'Osmanabad',value:'Osmanabad' },
        { name: 'Palghar',value:'Palghar' },
        { name: 'Parbhani',value:'Parbhani' },
        { name: 'Pune',value:'Pune' },
        { name: 'Raigad',value:'Raigad' },
        { name: 'Ratnagiri',value:'Ratnagiri' },
        { name: 'Sangli',value:'Sangli' },
        { name: 'Satara',value:'Satara' },
        { name: 'Sindhudurg',value:'Sindhudurg' },
        { name: 'Solapur',value:'Solapur' },
        { name: 'Thane',value:'Thane' },
        { name: 'Wardha',value:'Wardha' },
        { name: 'Washim',value:'Washim' },
        { name: 'Yavatmal',value:'Yavatmal' },
        
        
             
            ]
          },
          {
            name: 'Manipur',
            cities: [
              { name: 'Bishnupur',value:'Bishnupur' },
        { name: 'Chandel',value:'Chandel' },
        { name: 'Churachandpur',value:'Churachandpur' },
        { name: 'Imphal East',value:'Imphal East' },
        { name: 'Imphal West',value:'Imphal West' },
        { name: 'Jiribam',value:'Jiribam' },
        { name: 'Kakching',value:'Kakching' },
        { name: 'Kamjong',value:'Kamjong' },
        { name: 'Kangpokpi',value:'Kangpokpi' },
        { name: 'Noney',value:'Noney' },
        { name: 'Pherzawl',value:'Pherzawl' },
        { name: 'Senapati',value:'Senapati' },
        { name: 'Tamenglong',value:'Tamenglong' },
        { name: 'Tengnoupal',value:'Tengnoupal' },
        { name: 'Thoubal',value:'Thoubal' },
        { name: 'Ukhrul',value:'Ukhrul' },
        
        
             
            ]
          },
          {
            name: 'Meghalaya',
            cities: [
              { name: 'East Garo Hills',value:'East Garo Hills' },
        { name: 'East Jaintia Hills',value:'East Jaintia Hills' },
        { name: 'East Khasi Hills',value:'East Khasi Hills' },
        { name: 'North Garo Hills',value:'North Garo Hills' },
        { name: 'Ri Bhoi',value:'Ri Bhoi' },
        { name: 'South Garo Hills',value:'South Garo Hills' },
        { name: 'South West Garo Hills',value:'South West Garo Hills' },
        { name: 'South West Khasi Hills',value:'South West Khasi Hills' },
        { name: 'West Garo Hills',value:'West Garo Hills' },
        { name: 'West Jaintia Hills',value:'West Jaintia Hills' },
        { name: 'West Khasi Hills',value:'West Khasi Hills' },
        
        
             
            ]
          },
          {
            name: 'Mizoram',
            cities: [
              { name: 'Aizawl',value:'Aizawl' },
        { name: 'Champhai',value:'Champhai' },
        { name: 'Kolasib',value:'Kolasib' },
        { name: 'Lawngtlai',value:'Lawngtlai' },
        { name: 'Lunglei',value:'Lunglei' },
        { name: 'Mamit',value:'Mamit' },
        { name: 'Saiha',value:'Saiha' },
        { name: 'Serchhip',value:'Serchhip' },
        { name: 'Hnahthial',value:'Hnahthial' },
        { name: 'Khawzawl',value:'Khawzawl' },
        { name: 'Saitual',value:'Saitual' },
        
        
             
            ]
          },
          {
            name: 'Nagaland',
            cities: [
              { name: 'Dimapur',value:'Dimapur' },
        { name: 'Kiphire',value:'Kiphire' },
        { name: 'Kohima',value:'Kohima' },
        { name: 'Longleng',value:'Longleng' },
        { name: 'Mokokchung',value:'Mokokchung' },
        { name: 'Mon',value:'Mon' },
        { name: 'Peren',value:'Peren' },
        { name: 'Phek',value:'Phek' },
        { name: 'Tuensang',value:'Tuensang' },
        { name: 'Wokha',value:'Wokha' },
        { name: 'Zunheboto',value:'Zunheboto' },
        
        
             
            ]
          },
          {
            name: 'Odisha',
            cities: [
              { name: 'Angul',value:'Angul' },
        { name: 'Balangir',value:'Balangir' },
        { name: 'Balasore',value:'Balasore' },
        { name: 'Bargarh',value:'Bargarh' },
        { name: 'Bhadrak',value:'Bhadrak' },
        { name: 'Boudh',value:'Boudh' },
        { name: 'Cuttack',value:'Cuttack' },
        { name: 'Deogarh',value:'Deogarh' },
        { name: 'Dhenkanal',value:'Dhenkanal' },
        { name: 'Gajapati',value:'Gajapati' },
        { name: 'Ganjam',value:'Ganjam' },
        { name: 'Jagatsinghpur',value:'Jagatsinghpur' },
        { name: 'Jajpur',value:'Jajpur' },
        { name: 'Jharsuguda',value:'Jharsuguda' },
        { name: 'Kalahandi',value:'Kalahandi' },
        { name: 'Kandhamal',value:'Kandhamal' },
        { name: 'Kendrapara',value:'Kendrapara' },
        { name: 'Kendujhar (Keonjhar)',value:'Kendujhar (Keonjhar)' },
        { name: 'Khordha',value:'Khordha' },
        { name: 'Koraput',value:'Koraput' },
        { name: 'Malkangiri',value:'Malkangiri' },
        { name: 'Mayurbhanj',value:'Mayurbhanj' },
        { name: 'Nabarangpur',value:'Nabarangpur' },
        { name: 'Nayagarh',value:'Nayagarh' },
        { name: 'Nuapada',value:'Nuapada' },
        { name: 'Puri',value:'Puri' },
        { name: 'Rayagada',value:'Rayagada' },
        { name: 'Sambalpur',value:'Sambalpur' },
        { name: 'Subarnapur (Sonepur)',value:'Subarnapur (Sonepur)' },
        { name: 'Sundergarh',value:'Sundergarh' },
        
        
             
            ]
          },
          {
            name: 'Punjab',
            cities: [
              { name: 'Amritsar',value:'Amritsar' },
        { name: 'Barnala',value:'Barnala' },
        { name: 'Bathinda',value:'Bathinda' },
        { name: 'Faridkot',value:'Faridkot' },
        { name: 'Fatehgarh Sahib',value:'Fatehgarh Sahib' },
        { name: 'Fazilka',value:'Fazilka' },
        { name: 'Ferozepur',value:'Ferozepur' },
        { name: 'Gurdaspur',value:'Gurdaspur' },
        { name: 'Hoshiarpur',value:'Hoshiarpur' },
        { name: 'Jalandhar',value:'Jalandhar' },
        { name: 'Kapurthala',value:'Kapurthala' },
        { name: 'Ludhiana',value:'Ludhiana' },
        { name: 'Mansa',value:'Mansa' },
        { name: 'Moga',value:'Moga' },
        { name: 'Muktsar',value:'Muktsar' },
        { name: 'Pathankot',value:'Pathankot' },
        { name: 'Patiala',value:'Patiala' },
        { name: 'Rupnagar',value:'Rupnagar' },
        { name: 'Sahibzada Ajit Singh Nagar (Mohali)',value:'Sahibzada Ajit Singh Nagar (Mohali)' },
        { name: 'Sangrur',value:'Sangrur' },
        { name: 'Shahid Bhagat Singh Nagar (Nawanshahr)',value:'Shahid Bhagat Singh Nagar (Nawanshahr)' },
        { name: 'Tarn Taran',value:'Tarn Taran' },
        
        
             
            ]
          },
          {
            name: 'Rajasthan',
            cities: [
              { name: 'Ajmer',value:'Ajmer' },
        { name: 'Alwar',value:'Alwar' },
        { name: 'Banswara',value:'Banswara' },
        { name: 'Baran',value:'Baran' },
        { name: 'Barmer',value:'Barmer' },
        { name: 'Bharatpur',value:'Bharatpur' },
        { name: 'Bhilwara',value:'Bhilwara' },
        { name: 'Bikaner',value:'Bikaner' },
        { name: 'Bundi',value:'Bundi' },
        { name: 'Chittorgarh',value:'Chittorgarh' },
        { name: 'Churu',value:'Churu' },
        { name: 'Dausa',value:'Dausa' },
        { name: 'Dholpur',value:'Dholpur' },
        { name: 'Dungarpur',value:'Dungarpur' },
        { name: 'Hanumangarh',value:'Hanumangarh' },
        { name: 'Jaipur',value:'Jaipur' },
        { name: 'Jaisalmer',value:'Jaisalmer' },
        { name: 'Jalor',value:'Jalor' },
        { name: 'Jhalawar',value:'Jhalawar' },
        { name: 'Jhunjhunu',value:'Jhunjhunu' },
        { name: 'Jodhpur',value:'Jodhpur' },
        { name: 'Karauli',value:'Karauli' },
        { name: 'Kota',value:'Kota' },
        { name: 'Nagaur',value:'Nagaur' },
        { name: 'Pali',value:'Pali' },
        { name: 'Pratapgarh',value:'Pratapgarh' },
        { name: 'Rajsamand',value:'Rajsamand' },
        { name: 'Sawai Madhopur',value:'Sawai Madhopur' },
        { name: 'Sikar',value:'Sikar' },
        { name: 'Sirohi',value:'Sirohi' },
        { name: 'Sri Ganganagar',value:'Sri Ganganagar' },
        { name: 'Tonk',value:'Tonk' },
        { name: 'Udaipur',value:'Udaipur' },
        
        
             
            ]
          },
          {
            name: 'Sikkim',
            cities: [
              { name: 'East Sikkim',value:'East Sikkim' },
        { name: 'North Sikkim',value:'North Sikkim' },
        { name: 'South Sikkim',value:'South Sikkim' },
        { name: 'West Sikkim',value:'West Sikkim' },
        
        
             
            ]
          },
          {
            name: 'Tamil Nadu',
            cities: [
              { name: 'Ariyalur',value:'Ariyalur' },
        { name: 'Chennai',value:'Chennai' },
        { name: 'Coimbatore',value:'Coimbatore' },
        { name: 'Cuddalore',value:'Cuddalore' },
        { name: 'Dharmapuri',value:'Dharmapuri' },
        { name: 'Dindigul',value:'Dindigul' },
        { name: 'Erode',value:'Erode' },
        { name: 'Kanchipuram',value:'Kanchipuram' },
        { name: 'Kanyakumari',value:'Kanyakumari' },
        { name: 'Karur',value:'Karur' },
        { name: 'Krishnagiri',value:'Krishnagiri' },
        { name: 'Madurai',value:'Madurai' },
        { name: 'Nagapattinam',value:'Nagapattinam' },
        { name: 'Namakkal',value:'Namakkal' },
        { name: 'Nilgiris',value:'Nilgiris' },
        { name: 'Perambalur',value:'Perambalur' },
        { name: 'Pudukkottai',value:'Pudukkottai' },
        { name: 'Ramanathapuram',value:'Ramanathapuram' },
        { name: 'Salem',value:'Salem' },
        { name: 'Sivaganga',value:'Sivaganga' },
        { name: 'Thanjavur',value:'Thanjavur' },
        { name: 'Theni',value:'Theni' },
        { name: 'Thoothukudi (Tuticorin)',value:'Thoothukudi (Tuticorin)' },
        { name: 'Tiruchirappalli (Trichy)',value:'Tiruchirappalli (Trichy)' },
        { name: 'Tirunelveli',value:'Tirunelveli' },
        { name: 'Tirupathur',value:'Tirupathur' },
        { name: 'Tiruppur',value:'Tiruppur' },
        { name: 'Tiruvallur',value:'Tiruvallur' },
        { name: 'Tiruvannamalai',value:'Tiruvannamalai' },
        { name: 'Tiruvarur',value:'Tiruvarur' },
        { name: 'Vellore',value:'Vellore' },
        { name: 'Viluppuram',value:'Viluppuram' },
        { name: 'Virudhunagar',value:'Virudhunagar' },
        { name: 'Chengalpattu',value:'Chengalpattu' },
        { name: 'Ranipet',value:'Ranipet' },
        { name: 'Tenkasi',value:'Tenkasi' },
        { name: 'Kallakurichi',value:'Kallakurichi' },
        { name: 'Mayiladuthurai',value:'Mayiladuthurai' },
        
        
             
            ]
          },
          {
            name: 'Telangana',
            cities: [
              { name: 'Adilabad',value:'Adilabad' },
        { name: 'Bhadradri Kothagudem',value:'Bhadradri Kothagudem' },
        { name: 'Hyderabad',value:'Hyderabad' },
        { name: 'Jagtial',value:'Jagtial' },
        { name: 'Jangaon',value:'Jangaon' },
        { name: 'Jayashankar Bhupalapally',value:'Jayashankar Bhupalapally' },
        { name: 'Jogulamba Gadwal',value:'Jogulamba Gadwal' },
        { name: 'Kamareddy',value:'Kamareddy' },
        { name: 'Karimnagar',value:'Karimnagar' },
        { name: 'Khammam',value:'Khammam' },
        { name: 'Komaram Bheem Asifabad',value:'Komaram Bheem Asifabad' },
        { name: 'Mahabubabad',value:'Mahabubabad' },
        { name: 'Mahabubnagar',value:'Mahabubnagar' },
        { name: 'Mancherial',value:'Mancherial' },
        { name: 'Medak',value:'Medak' },
        { name: 'Medchal Malkajgiri',value:'Medchal Malkajgiri' },
        { name: 'Mulugu',value:'Mulugu' },
        { name: 'Nagarkurnool',value:'Nagarkurnool' },
        { name: 'Nalgonda',value:'Nalgonda' },
        { name: 'Narayanpet',value:'Narayanpet' },
        { name: 'Nirmal',value:'Nirmal' },
        { name: 'Nizamabad',value:'Nizamabad' },
        { name: 'Peddapalli',value:'Peddapalli' },
        { name: 'Rajanna Sircilla',value:'Rajanna Sircilla' },
        { name: 'Ranga Reddy',value:'Ranga Reddy' },
        { name: 'Sangareddy',value:'Sangareddy' },
        { name: 'Siddipet',value:'Siddipet' },
        { name: 'Suryapet',value:'Suryapet' },
        { name: 'Vikarabad',value:'Vikarabad' },
        { name: 'Wanaparthy',value:'Wanaparthy' },
        { name: 'Warangal Rural',value:'Warangal Rural' },
        { name: 'Warangal Urban',value:'Warangal Urban' },
        { name: 'Yadadri Bhuvanagiri',value:'Yadadri Bhuvanagiri' },
        
        
             
            ]
          },
          {
            name: 'Tripura',
            cities: [
             { name: 'Dhalai',value:'Dhalai' },
        { name: 'Gomati',value:'Gomati' },
        { name: 'Khowai',value:'Khowai' },
        { name: 'North Tripura',value:'North Tripura' },
        { name: 'Sepahijala',value:'Sepahijala' },
        { name: 'South Tripura',value:'South Tripura' },
        { name: 'Unakoti',value:'Unakoti' },
        { name: 'West Tripura',value:'West Tripura' },
        
        
             
            ]
          },
          {
            name: 'Uttar Pradesh',
            cities: [
              { name: 'Agra',value:'Agra' },
        { name: 'Aligarh',value:'Aligarh' },
        { name: 'Allahabad',value:'Allahabad' },
        { name: 'Ambedkar Nagar',value:'Ambedkar Nagar' },
        { name: 'Amethi',value:'Amethi' },
        { name: 'Amroha',value:'Amroha' },
        { name: 'Auraiya',value:'Auraiya' },
        { name: 'Azamgarh',value:'Azamgarh' },
        { name: 'Baghpat',value:'Baghpat' },
        { name: 'Bahraich',value:'Bahraich' },
        { name: 'Ballia',value:'Ballia' },
        { name: 'Balrampur',value:'Balrampur' },
        { name: 'Banda',value:'Banda' },
        { name: 'Barabanki',value:'Barabanki' },
        { name: 'Bareilly',value:'Bareilly' },
        { name: 'Basti',value:'Basti' },
        { name: 'Bhadohi',value:'Bhadohi' },
        { name: 'Bijnor',value:'Bijnor' },
        { name: 'Budaun',value:'Budaun' },
        { name: 'Bulandshahr',value:'Bulandshahr' },
        { name: 'Chandauli',value:'Chandauli' },
        { name: 'Chitrakoot',value:'Chitrakoot' },
        { name: 'Deoria',value:'Deoria' },
        { name: 'Etah',value:'Etah' },
        { name: 'Etawah',value:'Etawah' },
        { name: 'Faizabad',value:'Faizabad' },
        { name: 'Farrukhabad',value:'Farrukhabad' },
        { name: 'Fatehpur',value:'Fatehpur' },
        { name: 'Firozabad',value:'Firozabad' },
        { name: 'Gautam Buddha Nagar',value:'Gautam Buddha Nagar' },
        { name: 'Ghaziabad',value:'Ghaziabad' },
        { name: 'Ghazipur',value:'Ghazipur' },
        { name: 'Gonda',value:'Gonda' },
        { name: 'Gorakhpur',value:'Gorakhpur' },
        { name: 'Hamirpur',value:'Hamirpur' },
        { name: 'Hapur',value:'Hapur' },
        { name: 'Hardoi',value:'Hardoi' },
        { name: 'Hathras',value:'Hathras' },
        { name: 'Jalaun',value:'Jalaun' },
        { name: 'Jaunpur',value:'Jaunpur' },
        { name: 'Jhansi',value:'Jhansi' },
        { name: 'Kannauj',value:'Kannauj' },
        { name: 'Kanpur Dehat',value:'Kanpur Dehat' },
        { name: 'Kanpur Nagar',value:'Kanpur Nagar' },
        { name: 'Kanshiram Nagar',value:'Kanshiram Nagar' },
        { name: 'Kaushambi',value:'Kaushambi' },
        { name: 'Kushinagar',value:'Kushinagar' },
        { name: 'Lakhimpur Kheri',value:'Lakhimpur Kheri' },
        { name: 'Lalitpur',value:'Lalitpur' },
        { name: 'Lucknow',value:'Lucknow' },
        { name: 'Maharajganj',value:'Maharajganj' },
        { name: 'Mahoba',value:'Mahoba' },
        { name: 'Mainpuri',value:'Mainpuri' },
        { name: 'Mathura',value:'Mathura' },
        { name: 'Mau',value:'Mau' },
        { name: 'Meerut',value:'Meerut' },
        { name: 'Mirzapur',value:'Mirzapur' },
        { name: 'Moradabad',value:'Moradabad' },
        { name: 'Muzaffarnagar',value:'Muzaffarnagar' },
        { name: 'Pilibhit',value:'Pilibhit' },
        { name: 'Pratapgarh',value:'Pratapgarh' },
        { name: 'Raebareli',value:'Raebareli' },
        { name: 'Rampur',value:'Rampur' },
        { name: 'Saharanpur',value:'Saharanpur' },
        { name: 'Sambhal',value:'Sambhal' },
        { name: 'Sant Kabir Nagar',value:'Sant Kabir Nagar' },
        { name: 'Shahjahanpur',value:'Shahjahanpur' },
        { name: 'Shamli',value:'Shamli' },
        { name: 'Shravasti',value:'Shravasti' },
        { name: 'Siddharthnagar',value:'Siddharthnagar' },
        { name: 'Sitapur',value:'Sitapur' },
        { name: 'Sonbhadra',value:'Sonbhadra' },
        { name: 'Sultanpur',value:'Sultanpur' },
        { name: 'Unnao',value:'Unnao' },
        { name: 'Varanasi',value:'Varanasi' },
        
        
             
            ]
          },
          {
            name: 'Uttarakhand',
            cities: [
              { name: 'Almora',value:'Almora' },
        { name: 'Bageshwar',value:'Bageshwar' },
        { name: 'Chamoli',value:'Chamoli' },
        { name: 'Champawat',value:'Champawat' },
        { name: 'Dehradun',value:'Dehradun' },
        { name: 'Haridwar',value:'Haridwar' },
        { name: 'Nainital',value:'Nainital' },
        { name: 'Pauri Garhwal',value:'Pauri Garhwal' },
        { name: 'Pithoragarh',value:'Pithoragarh' },
        { name: 'Rudraprayag',value:'Rudraprayag' },
        { name: 'Tehri Garhwal',value:'Tehri Garhwal' },
        { name: 'Udham Singh Nagar',value:'Udham Singh Nagar' },
        { name: 'Uttarkashi',value:'Uttarkashi' },
        
        
        
             
            ]
          },{
            name: 'West Bengal',
            cities: [
              { name: 'Alipurduar',value:'Alipurduar' },
        { name: 'Bankura',value:'Bankura' },
        { name: 'Birbhum',value:'Birbhum' },
        { name: 'Cooch Behar',value:'Cooch Behar' },
        { name: 'Dakshin Dinajpur',value:'Dakshin Dinajpur' },
        { name: 'Darjeeling',value:'Darjeeling' },
        { name: 'Hooghly',value:'Hooghly' },
        { name: 'Howrah',value:'Howrah' },
        { name: 'Jalpaiguri',value:'Jalpaiguri' },
        { name: 'Jhargram',value:'Jhargram' },
        { name: 'Kalimpong',value:'Kalimpong' },
        { name: 'Kolkata',value:'Kolkata' },
        { name: 'Malda',value:'Malda' },
        { name: 'Murshidabad',value:'Murshidabad' },
        { name: 'Nadia',value:'Nadia' },
        { name: 'North 24 Parganas',value:'North 24 Parganas' },
        { name: 'Paschim Bardhaman',value:'Paschim Bardhaman' },
        { name: 'Paschim Medinipur',value:'Paschim Medinipur' },
        { name: 'Purba Bardhaman',value:'Purba Bardhaman' },
        { name: 'Yadgir',value:'Yadgir' },
        { name: 'Uttara Kannada',value:'Uttara Kannada' },
        { name: 'Vijayapura',value:'Vijayapura' },
        { name: 'Yadgir',value:'Yadgir' },
        
        
             
            ]
          },{
            name: 'Andaman and Nicobar Islands',
            cities: [
              { name: 'Nicobar',value:'Nicobar' },
        { name: 'North and Middle Andaman',value:'North and Middle Andaman' },
        { name: 'South Andaman',value:'South Andaman' },
        
             
            ]
          },
          {
            name: 'Chandigarh',
            cities: [
              { name: 'Chandigarh',value:'Chandigarh' },
        
             
            ]
          },
          {
            name: 'Dadra and Nagar Haveli and Daman and Diu',
        
            cities: [
              { name: 'Dadra and Nagar Haveli',value:'Dadra and Nagar Haveli' },
        { name: 'Daman',value:'Daman' },
        { name: 'Diu',value:'Diu' },
        
             
            ]
          },
          {
            name: 'Lakshadweep',
            cities: [
              { name: 'Lakshadweep',value:'Lakshadweep' },
             
            ]
          },
          {
            name: 'Delhi',
            cities: [
              { name: 'Central Delhi',value:'Central Delhi' },
        { name: 'East Delhi',value:'East Delhi' },
        { name: 'New Delhi',value:'New Delhi' },
        { name: 'North Delhi',value:'North Delhi' },
        { name: 'North East Delhi',value:'North East Delhi' },
        { name: 'North West Delhi',value:'North West Delhi' },
        { name: 'Shahdara',value:'Shahdara' },
        { name: 'South Delhi',value:'South Delhi' },
        { name: 'South East Delhi',value:'South East Delhi' },
        { name: 'South West Delhi',value:'South West Delhi' },
        { name: 'West Delhi',value:'West Delhi' },
        
             
            ]
          },
          {
            name: 'Pondicherry',
            cities: [
              { name: 'Puducherry',value:'Puducherry' },
        { name: 'Karaikal',value:'Karaikal' },
        { name: 'Mahe',value:'Mahe' },
        { name: 'Yanam',value:'Yanam' },
        
             
            ]
          },
          {
            name: 'Jammu and Kashmir',
            cities: [
              { name: 'Anantnag',value:'Anantnag' },
        { name: 'Bandipora',value:'Bandipora' },
        { name: 'Baramulla',value:'Baramulla' },
        { name: 'Budgam',value:'Budgam' },
        { name: 'Doda',value:'Doda' },
        { name: 'Ganderbal',value:'Ganderbal' },
        { name: 'Jammu',value:'Jammu' },
        { name: 'Kathua',value:'Kathua' },
        { name: 'Kishtwar',value:'Kishtwar' },
        { name: 'Kulgam',value:'Kulgam' },
        { name: 'Kupwara',value:'Kupwara' },
        { name: 'Leh',value:'Leh' },
        { name: 'Poonch',value:'Poonch' },
        { name: 'Pulwama',value:'Pulwama' },
        { name: 'Rajouri',value:'Rajouri' },
        { name: 'Ramban',value:'Ramban' },
        { name: 'Reasi',value:'Reasi' },
        { name: 'Samba',value:'Samba' },
        { name: 'Shopian',value:'Shopian' },
        { name: 'Srinagar',value:'Srinagar' },
        
        
             
            ]
          },
          {
            name: 'Ladakh',
            cities: [
              { name: 'Kargil',value:'Kargil' },
        { name: 'Leh',value:'Leh' },
        
        
             
            ]
          },
          // Add more states and their cities as needed
        ];
        
        this.ugdegrees = [
          { name: 'Bachelor of Arts (BA)', value:'Bachelor of Arts (BA)' },
 { name: 'Bachelor of Science (BSc)', value:'Bachelor of Science (BSc)' },
 { name: 'Bachelor of Commerce (BCom)', value:'Bachelor of Commerce (BCom)' },
 { name: 'Bachelor of Engineering (BE)', value:'Bachelor of Engineering (BE)' },
 { name: 'Bachelor of Technology (B.Tech)', value:'Bachelor of Technology (B.Tech)' },
 { name: 'Bachelor of Business Administration (BBA)', value:'Bachelor of Business Administration (BBA)' },
 { name: 'Bachelor of Computer Applications (BCA)', value:'Bachelor of Computer Applications (BCA)' },
 { name: 'Bachelor of Architecture (BArch)', value:'Bachelor of Architecture (BArch)' },
 { name: 'Bachelor of Education (B.Ed)', value:'Bachelor of Education (B.Ed)' },
 { name: 'Bachelor of Pharmacy (B.Pharm)', value:'Bachelor of Pharmacy (B.Pharm)' },
 { name: 'Bachelor of Dental Surgery (BDS)', value:'Bachelor of Dental Surgery (BDS)' },
 { name: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', value:'Bachelor of Medicine and Bachelor of Surgery (MBBS)' },
 { name: 'Bachelor of Ayurvedic Medicine and Surgery (BAMS)', value:'Bachelor of Ayurvedic Medicine and Surgery (BAMS)' },
 { name: 'Bachelor of Homeopathic Medicine and Surgery (BHMS)', value:'Bachelor of Homeopathic Medicine and Surgery (BHMS)' },
 { name: 'Bachelor of Unani Medicine and Surgery (BUMS)', value:'Bachelor of Unani Medicine and Surgery (BUMS)' },
 { name: 'Bachelor of Science in Nursing (BSc Nursing)', value:'Bachelor of Science in Nursing (BSc Nursing)' },
 { name: 'Bachelor of Physiotherapy (BPT)', value:'Bachelor of Physiotherapy (BPT)' },
 { name: 'Bachelor of Occupational Therapy (BOT)', value:'Bachelor of Occupational Therapy (BOT)' },
 { name: 'Bachelor of Optometry (B.Optom)', value:'Bachelor of Optometry (B.Optom)' },
 { name: 'Bachelor of Veterinary Science and Animal Husbandry (B.VSc & AH)', value:'Bachelor of Veterinary Science and Animal Husbandry (B.VSc & AH)' },
 { name: 'Bachelor of Fisheries Science (B.FSc)', value:'Bachelor of Fisheries Science (B.FSc)' },
 { name: 'Bachelor of Fine Arts (BFA)', value:'Bachelor of Fine Arts (BFA)' },
 { name: 'Bachelor of Journalism and Mass Communication (BJMC)', value:'Bachelor of Journalism and Mass Communication (BJMC)' },
 { name: 'Bachelor of Design (B.Des)', value:'Bachelor of Design (B.Des)' },
 { name: 'Bachelor of Law (LLB)', value:'Bachelor of Law (LLB)' },
 { name: 'Bachelor of Arts and Bachelor of Law (BA LLB)', value:'Bachelor of Arts and Bachelor of Law (BA LLB)' },
 { name: 'Bachelor of Business Administration and Bachelor of Law (BBA LLB)', value:'Bachelor of Business Administration and Bachelor of Law (BBA LLB)' },
 { name: 'Bachelor of Hotel Management and Catering Technology (BHMCT)', value:'Bachelor of Hotel Management and Catering Technology (BHMCT)' },
 { name: 'Bachelor of Travel and Tourism Management (BTTM)', value:'Bachelor of Travel and Tourism Management (BTTM)' },
 { name: 'Bachelor of Event Management (BEM)', value:'Bachelor of Event Management (BEM)' },
 { name: 'Bachelor of Mass Media and Communication (BMMC)', value:'Bachelor of Mass Media and Communication (BMMC)' },
 { name: 'Bachelor of Library and Information Science (BLISc)', value:'Bachelor of Library and Information Science (BLISc)' },
 { name: 'Bachelor of Social Work (BSW)', value:'Bachelor of Social Work (BSW)' },
 { name: 'Bachelor of Physical Education (BPEd)', value:'Bachelor of Physical Education (BPEd)' },
 { name: 'Bachelor of Performing Arts (BPA)', value:'Bachelor of Performing Arts (BPA)' },
 { name: 'Bachelor of Film and Television Production (BFTP)', value:'Bachelor of Film and Television Production (BFTP)' },
 { name: 'Bachelor of Animation and Multimedia (BAM)', value:'Bachelor of Animation and Multimedia (BAM)' },
 { name: 'Bachelor of Graphic Design (BGD)', value:'Bachelor of Graphic Design (BGD)' },
 { name: 'Bachelor of Photography (BPhot)', value:'Bachelor of Photography (BPhot)' },
 { name: 'Bachelor of Music (BMus)', value:'Bachelor of Music (BMus)' },
 { name: 'Bachelor of Theatre Arts (BTA)', value:'Bachelor of Theatre Arts (BTA)' },
 { name: 'Bachelor of Philosophy (BPhilo)', value:'Bachelor of Philosophy (BPhilo)' },
 { name: 'Bachelor of Psychology (BPsych)', value:'Bachelor of Psychology (BPsych)' },
 { name: 'Bachelor of Economics (BEcon)', value:'Bachelor of Economics (BEcon)' },
 { name: 'Bachelor of Business Economics (BBE)', value:'Bachelor of Business Economics (BBE)' },
 { name: 'Bachelor of Commerce (BC)', value:'Bachelor of Commerce (BC)' },
        ];

        this.pgdegrees=[
          { name: 'Master of Arts (MA)', value:'Master of Arts (MA)' },
 { name: 'Master of Science (MSc)', value:'Master of Science (MSc)' },
 { name: 'Master of Commerce (MCom)', value:'Master of Commerce (MCom)' },
 { name: 'Master of Business Administration (MBA)', value:'Master of Business Administration (MBA)' },
 { name: 'Master of Computer Applications (MCA)', value:'Master of Computer Applications (MCA)' },
 { name: 'Master of Engineering (MEng)', value:'Master of Engineering (MEng)' },
 { name: 'Master of Technology (MTech)', value:'Master of Technology (MTech)' },
 { name: 'Master of Architecture (MArch)', value:'Master of Architecture (MArch)' },
 { name: 'Master of Planning (MPlan)', value:'Master of Planning (MPlan)' },
 { name: 'Master of Laws (LLM)', value:'Master of Laws (LLM)' },
 { name: 'Master of Education (MEd)', value:'Master of Education (MEd)' },
 { name: 'Master of Physical Education (MPEd)', value:'Master of Physical Education (MPEd)' },
 { name: 'Master of Fine Arts (MFA)', value:'Master of Fine Arts (MFA)' },
 { name: 'Master of Design (MDes)', value:'Master of Design (MDes)' },
 { name: 'Master of Journalism and Mass Communication (MJMC)', value:'Master of Journalism and Mass Communication (MJMC)' },
 { name: 'Master of Library and Information Science (MLISc)', value:'Master of Library and Information Science (MLISc)' },
 { name: 'Master of Social Work (MSW)', value:'Master of Social Work (MSW)' },
 { name: 'Master of Public Health (MPH)', value:'Master of Public Health (MPH)' },
 { name: 'Master of Hospital Administration (MHA)', value:'Master of Hospital Administration (MHA)' },
 { name: 'Master of Pharmacy (MPharm)', value:'Master of Pharmacy (MPharm)' },
 { name: 'Master of Dental Surgery (MDS)', value:'Master of Dental Surgery (MDS)' },
 { name: 'Master of Ayurvedic Medicine and Surgery (MAMS)', value:'Master of Ayurvedic Medicine and Surgery (MAMS)' },
 { name: 'Master of Homeopathic Medicine and Surgery (MHMS)', value:'Master of Homeopathic Medicine and Surgery (MHMS)' },
 { name: 'Master of Unani Medicine and Surgery (MUMS)', value:'Master of Unani Medicine and Surgery (MUMS)' },
 { name: 'Master of Siddha Medicine (MSidd)', value:'Master of Siddha Medicine (MSidd)' },
 { name: 'Master of Naturopathy and Yogic Science (MNYSc)', value:'Master of Naturopathy and Yogic Science (MNYSc)' },
        ];
          
    }
}