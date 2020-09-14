import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { SERVER_URL, PATIENT_URL, LOOKUP_URL, DOCTOR_URL, MEDICINE_URL, UPLOAD_URL, DOWNLOAD_URL, HOSPITAL_URL,S3BASE_URL } from 'src/config';
import { tap } from 'rxjs/operators';
import {HttpClient } from "@angular/common/http";
import { HEADER_LOGO,SITE_URL } from "./../config";
import {Storage} from "@ionic/storage";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logo_url=HEADER_LOGO;
  site_url=SITE_URL;
  S3BASE_URL=S3BASE_URL;

  authUser = new ReplaySubject<any>(1);
  private jwtTokenName ='jwt_token';

  constructor(private readonly httpClient: HttpClient, private readonly storage: Storage, private readonly jwtHelper: JwtHelperService) {

  }

  // new user sign up
  signup(values: any): Observable<any> {
    console.log(values);
    return this.httpClient.post(`${PATIENT_URL}/signup`, values, {responseType: 'text'});
      /*.pipe(tap(jwt => {
        console.log("response===="+jwt);
        if (jwt !== 'EXISTS') {          
          return this.handleJwtResponse(jwt);          
        }
        return jwt;
      }));*/
  }

  // new user sign up
  circlesignup(values: any): Observable<any> {
    console.log(values);
    return this.httpClient.post(`${LOOKUP_URL}/circlepatientsignup`, values, {responseType: 'text'});
      /*.pipe(tap(jwt => {
        console.log("response===="+jwt);
        if (jwt !== 'EXISTS') {          
          return this.handleJwtResponse(jwt);          
        }
        return jwt;
      }));*/
  }

  // check user logged in
  checkLogin() {
    this.storage.get(this.jwtTokenName).then(jwt => { 
      if (jwt && !this.jwtHelper.isTokenExpired(jwt)) {
        this.authUser.next(jwt);        
      } else {
        console.log("JWT False"+jwt);
        this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null));
      }
    });
  }  

  // user session login 
  login(values: any,rememberValues:any): Observable<any> {
    return this.httpClient.post(`${SERVER_URL}/circlelogin`, values, {responseType: 'text'})
    .pipe(tap(jwt => {
      if(jwt !== 'NOTEXISTS'){
        if(rememberValues==1)
        {
          return this.handleJwtResponse(jwt);
        }else{         
          this.authUser.next(jwt);
        }
      }
      return jwt;
    }));      
  }

  // forget password
  forgotUidCheck(ptID: any){
    console.log("user---"+ptID);    
    return this.httpClient.get(`${SERVER_URL}/checkuid/`+ptID, {responseType: "json"});
  }

  // user logout session
  logout() {
    this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null));
  }

  // store jwt Token
  private handleJwtResponse(jwt: string) {  
    return this.storage.set(this.jwtTokenName,jwt)
      .then(() => this.authUser.next(jwt))
      .then(() => jwt);    
  }

  // get Patient detail by uid
  patientdetail(values: any) {        
    var epurl=LOOKUP_URL+"/getcirclepatientdetails/"+values;       
    return this.httpClient.get(epurl, {responseType: "json"});          
  }

  //patient address api
  getAddressByUser(userid:any){
    var epurl=PATIENT_URL+"/useraddress/"+userid;
    //console.log("url......"+epurl);
    return this.httpClient.get(epurl, {responseType: "json"});
  }

  // update patient profile
  update(values: any, user: any): Observable<any> {
    console.log(values);
    var url=PATIENT_URL;
    console.log(url);
    return this.httpClient.put(`${PATIENT_URL}/update/`+user, values, {responseType: 'text'});      
  } 


  // edit/add address of patiient
  addAddress(values:any){
    var epurl=PATIENT_URL+"/addaddress";
    return this.httpClient.post(epurl, values, {responseType: "text"});
  }

  // seperate family member account into seperate
  separateAccount(value:any, mobno:String): Observable<any> {
    let url=PATIENT_URL+"/updatesplitaccount/"+mobno;
    console.log(url);
    return this.httpClient.put(url, value, {responseType: 'text'});
  }

  // View Health Alert
  viewHealthAlert(): Observable<any> {
    var epurl=LOOKUP_URL+"/viewhealthalerts";
    //console.log("url......"+epurl);    
    let alertList= this.httpClient.get(epurl, {responseType: "json"});
    //console.log(ptlist);
    return alertList;
  }

  // healthlocker prescription search
  prescriptionSearch(search:any){
    console.log("prescription search values",search);
    var epurl=MEDICINE_URL+"/prescriptionlist";
    return this.httpClient.put(epurl, search, {responseType: "json"});
  }  

  // get single circle healthlocker prescription list
  singleCirclePrescriptionList(userid:any, search:any){
    console.log("prescription search values",search);
    var epurl=MEDICINE_URL+"/circleprescriptionlist/"+userid;
    return this.httpClient.put(epurl, search, {responseType: "json"});
  }  

  // single prescription
  uniquePrescription(values: any): Observable<any> {
    var epurl=MEDICINE_URL+"/unique/"+values;
    console.log("url......"+epurl);
    console.log(JSON.stringify(values));
    return this.httpClient.get(epurl, {responseType: "json"});
  }

  //Get doctors list
  doctorsList(): Observable<any> {
    var epurl=DOCTOR_URL+"/profile_list";
    console.log("url......"+epurl);    
    return this.httpClient.get(epurl, {responseType: "json"});
  }

  getDocumentsByDxid(dxid) {
    var pf_url=UPLOAD_URL+"/view_documents/"+dxid;
    console.log(pf_url);
    // debugger;       
    return this.httpClient.get(pf_url, {responseType: "json"});
  }

  // get doc uid by name
  docUIDSearch(docname:any){
    console.log("doctor name", docname);
    var epurl=DOCTOR_URL+"/doctoruidbydocname/"+docname;
    return this.httpClient.get(epurl, {responseType: "json"});
  }

  downloadDocumentByKeyname(keyname:any) {
    var pf_url=DOWNLOAD_URL+"/api/file/"+keyname;
    console.log(pf_url);
    // debugger;       
    return this.httpClient.get(pf_url, {responseType: "text"});
  }

  prescriptionVital(dxid: any): Observable<any> {
    var epurl=MEDICINE_URL+"/vital/"+dxid;
    console.log("url......"+epurl);
    console.log("dxid----"+(dxid));
    return this.httpClient.get(epurl, {responseType: "json"});
  }

  //Add QR Code
  getQrCode(values: any): Observable<any> {
    var epurl=MEDICINE_URL+"/getqrcode/"+values;
    console.log("url......"+epurl);
    console.log(values);
    return this.httpClient.get(epurl,{responseType: "json"});
  }

  getDocumentKeyName(documentID:any){
    var epurl=UPLOAD_URL+"/get_keyname/"+documentID;
    console.log("url......"+epurl);
    console.log("Template Name----"+documentID);
    return this.httpClient.get(epurl, {responseType: "text"});
  }

  getHospitalDetailsByTenantid(tenantid:any){
    var epurl=HOSPITAL_URL+"/hospitalprofile/"+tenantid;
    //console.log("url......"+epurl);
    return this.httpClient.get(epurl, {responseType: "json"});
  }

  // get virtual hospital circle
  getVirtualCircleBySpec(specObj){
    var epurl=LOOKUP_URL+"/getvcirclebyspec";
    return this.httpClient.put(epurl, specObj, {responseType: "json"});
  }

  // get virtual circle detail by circle code
  getCircleDetailByCode(circlecode) {
    console.log("get circle", circlecode);
    return this.httpClient.get(`${LOOKUP_URL}/getvcircledocbycode/`+circlecode, {responseType: "json"});
  }

  // get virtual circle doc detail by docuid array
  getCircleDocProfile(docuidlist) {
    var epurl=LOOKUP_URL+"/getvcircledocdetail";
    return this.httpClient.put(epurl, docuidlist, {responseType: "json"});
  }

  // get swasth subscribe plan list
  getSubscribPlanList() {
    var epurl=LOOKUP_URL+"/getplanmaster";
    return this.httpClient.get(epurl, {responseType: "json"});
  }

  // get razorpay subscribe plan list
  getRazorpaySubscribPlanList() {
    var epurl=LOOKUP_URL+"/viewplans";
    return this.httpClient.get(epurl, {responseType: "json"});
  }

  // create razorpay subscribe 
  createRazorpaySubscribe(subscribeObj) {
    var epurl=LOOKUP_URL+"/createsubscription";
    return this.httpClient.post(epurl, subscribeObj, {responseType: "json"});
  }

  // create chat restriction after subscription
  createChatRestriction(chatrestrictobj) {
    var epurl=LOOKUP_URL+"/createchatrestrictsubscription";
    return this.httpClient.post(epurl, chatrestrictobj, {responseType: "json"});
  }

  // get pt chat restriction detail
  getChatRestrictDetail(value:any) {
    let url = LOOKUP_URL+"/getptchatrestricdetail";
    return this.httpClient.put(url, value, {responseType: "json"});
  }

  // add vchat complaints
  addChatComplaint(chatcomplaintobj) {
    var epurl=LOOKUP_URL+"/addvchatcomplaint";
    return this.httpClient.post(epurl, chatcomplaintobj, {responseType: "json"});
  }

  // create admin doc pt chat restriction complaint
  adminPtChatRestriction(value:any) {
    var epurl=LOOKUP_URL+"/createadmindocchatrestrict";
    return this.httpClient.post(epurl, value, {responseType: 'text'});
  }

  // get patient chat by docuserid and circle code
  getPatientChatByPatientUserid(userid,circleCode) {
    let url = LOOKUP_URL+"/getpatientchat/"+userid+"/"+circleCode;
    return this.httpClient.get(url, {responseType: "json"});
  }

  // get doctor specialization list
  getDoctorSpecialization() {
    let url = LOOKUP_URL+"/getspecialisation";
    return this.httpClient.get(url, {responseType: "json"});
  }

  // add patient to circle
  addPtToCircle(values:any) {
    var epurl=LOOKUP_URL+"/addptcircle";
    return this.httpClient.post(epurl, values, {responseType: "json"});
  }

  // add patient admin chat detail
  createPtChat(values:any) {
    console.log("value", values);
    var epurl=LOOKUP_URL+"/createpatientchat";
    return this.httpClient.post(epurl, values, {responseType: "json"});
  }

  // get patient subscribed circle code list
  getPtCircleList(ptuid:any) {
    let url = LOOKUP_URL+"/getptcirclecodelist/"+ptuid;
    return this.httpClient.get(url, {responseType: "json"});
  }

  // get circle detail for doctor
  getCircleDetail(circleCode:any) {
    let url = LOOKUP_URL+"/getcircledetail";
    return this.httpClient.put(url,circleCode, {responseType: "json"});
  }

  // get chat by userid and circle code
  getChatByUserid(userid,circleCode) {
    let url = LOOKUP_URL+"/getchatdeatils/"+userid+"/"+circleCode;
    return this.httpClient.get(url, {responseType: "json"});
  }

  // triage reference doctor
  triageRefDoctor(triageobj:any) {
    var epurl=LOOKUP_URL+"/triagetodoctorchat";
    return this.httpClient.post(epurl, triageobj, {responseType: 'text'});
  }

  // get chat format detail of patient for triaging doctor
  getChatFormatDetailPt(value:any) {
    var epurl=LOOKUP_URL+"/getchatformat"; 
    return this.httpClient.put(epurl, value, {responseType: "json"});
  }

  // add family member
  addFamilyMember(familyMember:any) {
    let url = LOOKUP_URL+"/addfamilymember";
    return this.httpClient.post(url,familyMember, {responseType: "text"});
  }  

  addAllFamilyMember(familyMember:any) {
    let url = LOOKUP_URL+"/addallfamilymembers";
    return this.httpClient.post(url,familyMember, {responseType: "text"});
  } 

  // get all circle list detail 
  getAllCircleDetailList() {
    let url = LOOKUP_URL+"/getallvcirclelist";
    return this.httpClient.get(url, {responseType: "json"});
  }

  // get virtual consultation fee
  getConsultFeeDetailSingleCircle(billobj:any) {
    let url = LOOKUP_URL+"/getvirtualconsultfee";
    return this.httpClient.put(url,billobj, {responseType: "json"});
  }

  // get virtual consultation fee
  getConsultFeeDetailAllCircle(billobj:any, ptuid:any) {
    let url = LOOKUP_URL+"/getallcirclevirtualconsultfee/"+ptuid;
    return this.httpClient.put(url,billobj, {responseType: "json"});
  }

  // update chat format history for triage detail
  updateChatFormat(value:any, formatid:any) {
    var epurl=LOOKUP_URL+"/updatechatformat/"+formatid;
    return this.httpClient.put(epurl, value, {responseType: 'text'});
  }

  // update virtual consultation fee
  updateConsultFee(billobj) {
    let url = LOOKUP_URL+"/updatevirtualconsultfee";
    return this.httpClient.post(url,billobj, {responseType: "text"});
  }

  // update patient profile
  updateCirclePatientAccountType(userid: any, accountType: any) {
    let url = LOOKUP_URL+"/updateaccounttype/"+userid+"/"+accountType;
    console.log("Update Account Type==>",url);
    return this.httpClient.get(url, {responseType: "text"});      
  } 

  // get Family Members

  getFamilyMember(primary_userid)
  {
    let url = LOOKUP_URL+"/getfamilymembers/"+primary_userid;
    console.log(url);
    return this.httpClient.get(url, {responseType: "json"});
  }

  //get primary user profile

  getPrimaryUserProfile(userid)
  {
    let url = LOOKUP_URL+"/getcirclepatientdetails/"+userid;
    console.log(url);
    return this.httpClient.get(url, {responseType: "json"});
  }

  // get family member profile
  getFamilyMemberProfile(userid)
  {
    let url = LOOKUP_URL+"/getfamilymemberprofile/"+userid;
    console.log(url);
    return this.httpClient.get(url, {responseType: "json"});
  }

  //get circle code by family primary user id

  getCircleCode(userid,subscriptiontype)
  {
    let url = LOOKUP_URL+"/getcirclecode/"+userid+"/"+subscriptiontype;
    console.log(url);
    return this.httpClient.get(url, {responseType: "text"});
  }

  // get circle entity by circle code
  getCircleEntity(circleCode) {
    let url = LOOKUP_URL+"/getcircle/"+circleCode;
    return this.httpClient.get(url, {responseType: "json"});
  }

  // get doctor profile by userid
  getDoctorProfile(docuserID: any){
    ////console.log("Doctor---"+docuserID);    
    return this.httpClient.get(`${DOCTOR_URL}/profile/`+docuserID, {responseType: "json"});
  }

  // get triage doctor chat detail
  getPtTriageDocChatDetail(uid,docid,ccode) {
    let url = LOOKUP_URL+"/gettriagedoctorchat/"+uid+"/"+docid+"/"+ccode;
    console.log(url);    
    return this.httpClient.get(url, {responseType: "json"});
  }

  // verify family member

  checkFamilyMember(userid)
  {
    let url = LOOKUP_URL+"/verifyfamilymember/"+userid;
    console.log(url);    
    return this.httpClient.get(url, {responseType: "json"});
  }

  // check patient subscribed in circle

  checkPatientSubscribedInCircle(userid,circlecode)
  {
    let url = LOOKUP_URL+"/checkpatientsubscripedincircle/"+userid+"/"+circlecode;
    console.log(url);    
    return this.httpClient.get(url, {responseType: "json"});
  }

  // get mobile country code list
  getCountryCodes() {
    var epurl=LOOKUP_URL+"/countrycodes";
    return this.httpClient.get(epurl, {responseType: "json"});
  }

  // get circle obj and  circle doctor list
  getCircleDocListByCcode(ccode) {
    var epurl=LOOKUP_URL+"/getvcircledoclistbyccode/"+ccode;
    return this.httpClient.get(epurl, {responseType: "json"});
  }

  // update chat request count
  updateChatRequestCount(userid,circlecode,type) {
    var epurl=LOOKUP_URL+"/updatechatrequestcount/"+userid+"/"+circlecode+"/"+type;
    return this.httpClient.put(epurl, {responseType: 'text'});
  }
  
}
