from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django import http
from School_Management_app import models
from django.contrib import messages
from django.shortcuts import HttpResponse,render,redirect
from django.conf import settings
from django.urls import reverse
def index(request):
    if not models.automatic1.objects.all().exists():
        models.automatic1.objects.create(reg_no=0)
        models.automatic1.objects.create(adm_no=0)
        models.automatic1.objects.create(e_id=0)
    return render (request, 'index.html')



###########        Student Section      ########



def Registration(request):
    if request.method == 'POST':
        reg_no=request.POST.get('reg_no')
        r_date=request.POST.get('r_date')
        s_name=request.POST.get('s_name')
        s_pic=request.FILES.get('s_pic')
        
        gender=request.POST.get('gender')
        s_dob=request.POST.get('s_dob')
        s_phone=request.POST.get('s_phone')
        email=request.POST.get('email')
        s_bgroup=request.POST.get('s_bgroup')
        s_imark=request.POST.get('s_imark')
        s_disable=request.POST.get('s_disable')
        s_preschool=request.POST.get('s_preschool')
        s_preclass=request.POST.get('s_preclass')
        s_sign=request.FILES.get('s_sign')
        s_preboard=request.POST.get('s_preboard')
        s_nation=request.POST.get('s_nation')
        s_religion=request.POST.get('s_religion')
        s_cast=request.POST.get('s_cast')
        s_fname=request.POST.get('s_fname')
        s_fcont=request.POST.get('s_fcont')
        s_fpic=request.FILES.get('s_fpic')
        s_femail=request.POST.get('s_femail')
        s_fquali=request.POST.get('s_fquali')
        s_foccup=request.POST.get('s_foccup')
        s_forg=request.POST.get('s_forg')
        s_mname=request.POST.get('s_mname')
        s_mcont=request.POST.get('s_mcont')
        s_mpic=request.FILES.get('s_mpic')
        s_memail=request.POST.get('s_memail')
        s_mquali=request.POST.get('s_mquali')
        s_moccup=request.POST.get('s_moccup')
        s_morg=request.POST.get('s_morg')
        income=request.POST.get('s_annual')
        s_padrs=request.POST.get('s_padrs')
        s_ppcode=request.POST.get('s_ppcode')
        s_cadrs=request.POST.get('s_cadrs')
        s_cpcode=request.POST.get('s_cpcode')
        s_aadhar=request.FILES.get('s_aadhar')
        s_faadhar=request.FILES.get('s_faadhar')
        s_maadhar=request.FILES.get('s_maadhar')
        s_medical=request.FILES.get('s_medical')
        S_tc=request.FILES.get('S_tc')
        obj=models.student_reg(reg_no=reg_no, date=r_date, name=s_name, s_pic=s_pic, s_sign=s_sign, gender=gender, dob=s_dob, phone_no=s_phone, email=email, b_group=s_bgroup, i_mark=s_imark, disable=s_disable, pre_school=s_preschool, pre_class=s_preclass, pre_board=s_preboard, nation=s_nation, religion=s_religion, cast=s_cast, f_name=s_fname, f_cont=s_fcont , f_email=s_femail, f_quali=s_fquali, f_occup=s_foccup, f_org=s_forg, f_pic=s_fpic, m_name=s_mname, m_cont=s_mcont, m_email=s_memail, m_quali=s_mquali, m_occup=s_moccup, m_org=s_morg, m_pic=s_mpic, a_income=income, p_adrs=s_padrs, p_pincode=s_ppcode, c_adrs=s_cadrs, C_pincode=s_cpcode, aadhar=s_aadhar, f_aadhar=s_faadhar, m_aadhar=s_maadhar, s_medical=s_medical, S_tc=S_tc)
        obj.save()
        models.automatic1.objects.filter(id=1).update(reg_no=models.automatic1.objects.get(id=1).reg_no+1)
        messages.success(request,'Record Sucessfully inserted')
        return redirect(reverse('Student_Registration'))
    else:
        rs=models.automatic1.objects.get(id=1).reg_no
        rs=rs+1
        if rs<10:
            reg_no='REG00'+str(rs)
        elif rs<100:
            reg_no='REG0'+str(rs)
        else:
            reg_no='REG'+str(rs)
        # print(reg_no)   
        return render (request, 'Student_Registration.html',{'reg_no':reg_no})
def Reg_ser(request):
    Reg_no= models.student_reg.objects.values('reg_no').distinct()
    Name= models.student_reg.objects.values('name').distinct()
    Phone_no= models.student_reg.objects.values('phone_no').distinct()
    Pincode= models.student_reg.objects.values('p_pincode').distinct()
    if request.method == 'POST':
        Reg_no= request.POST.get('Reg_no')
        Name = request.POST.get('Name')
        Phone_no= request.POST.get('Phone_no')
        Pincode= request.POST.get('Pincode')
        f_date= request.POST.get('f_date')
        t_date= request.POST.get('t_date')
        url={}
        if Reg_no != "":
            url['reg_no']=Reg_no
        if Name != "":
            url['name']=Name
        if Phone_no != "":
            url['phone_no']=Phone_no
        if Pincode != "":
            url['p_pincode']=Pincode
        if f_date != "" and t_date !="":
            url['date__range'] = [f_date,t_date]
        
        
        obj = models.student_reg.objects.filter(**url)
        data = models.student_reg.objects.all() 
        if obj.exists():   
            return render(request, 'Student_Reg_Service.html', {'value': obj, 'val': data})
        else:
            messages.info(request, 'No records available.')
            return render(request, 'Student_Reg_Service.html', {'value':'', 'val': data})
    else:
        data = models.student_reg.objects.all()
        
        return render (request, 'Student_Reg_Service.html', {'value':'', 'val': data})
def Student_Reg_delete(request,iid):
    models.student_reg.objects.filter(id=iid).delete()
    return redirect('Student_Registration_Service')
def Student_reg_update(request,iid):
    update= models.student_reg.objects.get(id=iid)
    if request.method=='POST':
        update.reg_no=request.POST.get('reg_no')
        update.date=request.POST.get('r_date')
        update.name=request.POST.get('s_name')
        if request.FILES.get('s_pic'):
            update.s_pic=request.FILES.get('s_pic')
        update.gender=request.POST.get('gender')
        update.dob=request.POST.get('s_dob')
        update.phone_no=request.POST.get('s_phone')
        update.email=request.POST.get('email')
        update.b_group=request.POST.get('s_bgroup')
        update.i_mark=request.POST.get('s_imark')
        update.disable=request.POST.get('s_disable')
        update.pre_school=request.POST.get('s_preschool')
        update.pre_class=request.POST.get('s_preclass')
        if request.FILES.get('s_sign'):
            update.s_sign=request.FILES.get('s_sign')
        update.pre_board=request.POST.get('s_preboard')
        update.nation=request.POST.get('s_nation')
        update.religion=request.POST.get('s_religion')
        update.cast=request.POST.get('s_cast')
        update.f_name=request.POST.get('s_fname')
        update.f_cont=request.POST.get('s_fcont')
        if request.FILES.get('s_fpic'):
            update.f_pic=request.FILES.get('s_fpic')
        update.f_email=request.POST.get('s_femail')
        update.f_quali=request.POST.get('s_fquali')
        update.f_occup=request.POST.get('s_foccup')
        update.f_org=request.POST.get('s_forg')
        update.m_name=request.POST.get('s_mname')
        update.m_cont=request.POST.get('s_mcont')
        if request.FILES.get('s_mpic'):
            update.m_pic=request.FILES.get('s_mpic')
        update.m_email=request.POST.get('s_memail')
        update.m_quali=request.POST.get('s_mquali')
        update.m_occup=request.POST.get('s_moccup')
        update.m_org=request.POST.get('s_morg')
        update.a_income=request.POST.get('s_annual')
        update.p_adrs=request.POST.get('s_padrs')
        update.p_pincode=request.POST.get('s_ppcode')
        update.c_adrs=request.POST.get('s_cadrs')
        update.C_pincode=request.POST.get('s_cpcode')
        if request.FILES.get('s_aadhar'):
            update.aadhar=request.FILES.get('s_aadhar')
        if request.FILES.get('s_faadhar'):
            update.f_aadhar=request.FILES.get('s_faadhar')
        if request.FILES.get('s_maadhar'):
            update.m_aadhar=request.FILES.get('s_maadhar')
        if request.FILES.get('s_medical'):
            update.s_medical=request.FILES.get('s_medical')
        if request.FILES.get('S_tc'):
            update.S_tc=request.FILES.get('S_tc')
        update.save()
        messages.success(request,'Record Sucessfully updated')
        return render(request,'Student_Registration.html')
    else:
        return render(request,'Student_Registration_update.html',{"u":update})




def Addmission(request):
    if request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':
        if request.method == "GET":
            reg_no = request.GET.get('reg_no')
            student = models.student_reg.objects.get(reg_no=reg_no)
            response_data = {
                'success': True,
                'data': student.name,
                'f_name':student.f_name,
                's_pic':student.s_pic.url,
                's_sign':student.s_sign.url,
                'dob':student.dob,
                'gender':student.gender,
                'email':student.email,
                'phone_no':student.phone_no,
                'nation':student.nation,
                'religion':student.religion,
                'cast':student.cast,
                'f_cont':student.f_cont,
                'm_name':student.m_name,
                'm_cont':student.m_cont,
                'p_adrs':student.p_adrs,
                'p_pincode':student.p_pincode,
                'b_group':student.b_group,
            }
            
            
            return http.JsonResponse(response_data,safe=False)

    if request.method == 'POST':
        reg_no=request.POST.get('reg_no')
        adm_no=request.POST.get('adm_no')
        session=request.POST.get('session')
        name=request.POST.get('name')
        s_pic=request.FILES.get('s_pic')
        if s_pic is None:
            pic = models.student_reg.objects.get(reg_no=reg_no)
            s_pic = pic.s_pic
        gender=request.POST.get('gender')
        dob=request.POST.get('dob')
        s_class=request.POST.get('s_class')
        roll_no=request.POST.get('roll_no')
        section=request.POST.get('section')
        phone=request.POST.get('phone')
        email=request.POST.get('e_mail')
        b_group=request.POST.get('b_group')
        disable=request.POST.get('disable')
        s_sign=request.FILES.get('s_sign')
        if s_sign is None:
            sign = models.student_reg.objects.get(reg_no=reg_no)
            s_sign = sign.s_sign
        nation=request.POST.get('nation')
        religion=request.POST.get('religion')
        cast=request.POST.get('cast')
        sib_name=request.POST.getlist('sib_name')
        sib_adm_no=request.POST.getlist('sib_adm_no')
        f_name=request.POST.get('f_name')
        f_cont=request.POST.get('f_cont')
        m_name=request.POST.get('m_name')
        m_cont=request.POST.get('m_cont')
        annual=request.POST.get('annual')
        adm_fee=request.POST.get('adm_fee')
        T_fee=request.POST.get('T_fee')
        Trans_fee=request.POST.get('Trans_fee')
        misc_fee=request.POST.get('misc_fee')
        dis_fee=request.POST.get('Disc_fee')
        adrss=request.POST.get('adrss')
        pincode=request.POST.get('pincode')
        medical=request.FILES.get('medical')
        obj=models.student_adm(reg_no=reg_no,adm_no=adm_no,session=session, name=name, s_pic=s_pic, s_sign=s_sign,roll_no=roll_no,section=section,adm_fee=adm_fee,T_fee=T_fee,Trans_fee=Trans_fee,misc_fee=misc_fee,dis_fee=dis_fee, gender=gender, dob=dob, phone=phone, e_mail=email, b_group=b_group,disable=disable, s_class=s_class,nation=nation, religion=religion, cast=cast,sib_name=sib_name,sib_adm_no=sib_adm_no, f_name=f_name,f_cont=f_cont , m_name=m_name, m_cont=m_cont, annual=annual,adrss=adrss, pincode=pincode, medical=medical)
        obj.save()
        models.automatic1.objects.filter(id=1).update(adm_no=models.automatic1.objects.get(id=1).adm_no+1)
        messages.success(request,'Record Sucessfully inserted')
        return redirect(reverse('Student_Addmission'))
    else:
        rs=models.automatic1.objects.get(id=1).adm_no
        rs=rs+1
        if rs<10:
            adm_no='ADM00'+str(rs)
        elif rs<100:
            adm_no='ADM0'+str(rs)
        else:
            adm_no='ADM'+str(rs)
        return render (request, 'Student_Addmission.html',{'adm_no':adm_no})
       
def Adm_ser(request):
    adm_no= models.student_adm.objects.values('adm_no').distinct()
    session= models.student_adm.objects.values('session').distinct()
    name= models.student_adm.objects.values('name').distinct()
    phone= models.student_adm.objects.values('phone').distinct()
    data= models.student_adm.objects.all()
    if request.method =='POST':
        adm_no= request.POST.get('adm_no')
        session= request.POST.get('session')
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        url={}
        if adm_no !="":
            url['adm_no']=adm_no
        if session !="":
            url['session']=session
        if name !="":
            url['name']=name
        if phone !="":
            url['phone']=phone
        if url:
            obj= models.student_adm.objects.filter(**url)
            
            if obj.exists():
                return render(request,'Student_Adms_Service.html', {'value': obj, 'val': data})
            else:
                messages.success(request, 'No records available.')
                return redirect('Student_Admission_Service')
        return render (request, 'Student_Adms_Service.html', {'value':data, 'val': data})   
    else:
        data = models.student_adm.objects.all()
        return render (request, 'Student_Adms_Service.html', {'value':'', 'val': data})
def Student_Adm_delete(request,iid):
    models.student_adm.objects.filter(id=iid).delete()
    return redirect('Student_Admission_Service')    
def student_adm_update(request,iid):
    update= models.student_adm.objects.get(id=iid)
    if request.method =='POST':
        update.reg_no=request.POST.get('reg_no')
        update.adm_no=request.POST.get('adm_no')
        update.session=request.POST.get('session')
        update.name=request.POST.get('name')
        if request.FILES.get('s_pic'):
            update.s_pic=request.FILES.get('s_pic')
        update.gender=request.POST.get('gender')
        update.dob=request.POST.get('dob')
        update.s_class=request.POST.get('s_class')
        update.roll_no=request.POST.get('roll_no')
        update.section=request.POST.get('section')
        update.phone=request.POST.get('phone')
        update.e_mail=request.POST.get('e_mail')
        update.b_group=request.POST.get('b_group')
        update.disable=request.POST.get('disable')
        if request.FILES.get('s_sign'):
            update.s_sign=request.FILES.get('s_sign')
        update.nation=request.POST.get('nation')
        update.religion=request.POST.get('religion')
        update.cast=request.POST.get('cast')
        update.sib_name=request.POST.get('sib_name')
        update.sib_adm_no=request.POST.get('sib_adm_no')
        update.f_name=request.POST.get('f_name')
        update.f_cont=request.POST.get('f_cont')
        update.m_name=request.POST.get('m_name')
        update.m_cont=request.POST.get('m_cont')
        update.annual=request.POST.get('annual')
        update.adm_fee=request.POST.get('adm_fee')
        update.T_fee=request.POST.get('T_fee')
        update.Trans_fee=request.POST.get('Trans_fee')
        update.misc_fee=request.POST.get('misc_fee')
        update.dis_fee=request.POST.get('dis_fee')
        update.adrss=request.POST.get('adrss')
        update.pincode=request.POST.get('pincode')
        if request.FILES.get('medical'):
            update.medical=request.FILES.get('medical')
        update.save()
        messages.success(request,'Record Sucessfully updated')
        return render(request,'Student_Addmission.html')
    else:
        return render (request,'Student_Addmission_update.html',{"u":update})

def fees(request):
    if request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':
        if request.method == "GET":
            adm_no = request.GET.get('adm_no')
            fee = models.student_adm.objects.get(adm_no=adm_no)
            response_data = {
                'success': True,
                'name': fee.name,
                'f_name':fee.f_name,
                's_class':fee.s_class,
                'roll_no':fee.roll_no,
                'phone':fee.phone,
                's_pic':fee.s_pic.url,
                'adm_fee':fee.adm_fee,
                'T_fee':fee.T_fee,
                'misc_fee':fee.misc_fee,
                'dis_fee':fee.dis_fee,
                'total_fee':int(fee.adm_fee) + int(fee.T_fee) + int(fee.misc_fee) - int(fee.dis_fee),
            }
            return http.JsonResponse(response_data,safe=False)
    if request.method == 'POST':
        
        fee_receipt_no=request.POST.get('fee_receipt_no')
        adm_no=request.POST.get('adm_no')
        s_name=request.POST.get('s_name')
        f_name=request.POST.get('f_name')
        s_class=request.POST.get('s_class')
        roll=request.POST.get('roll')
        phone=request.POST.get('phone')
        month_name=request.POST.get('month_name')
        fee=request.POST.get('fee')
        late_fee=request.POST.get('late_fee')
        total_fee=request.POST.get('total_fee')
        due_date=request.POST.get('due_date')
        pay_date=request.POST.get('pay_date')
        pay_amount=request.POST.get('pay_amount')
        pay_mode=request.POST.get('pay_mode')
        balance_amnt=request.POST.get('balance_amnt')
        pay_time=request.POST.get('pay_time')
        obj=models.fee_management(fee_receipt_no=fee_receipt_no, adm_no=adm_no, phone=phone,s_name=s_name, f_name=f_name, s_class=s_class,roll=roll, month_name=month_name, fee=fee, late_fee=late_fee, total_fee=total_fee, due_date=due_date, pay_date=pay_date, pay_amount=pay_amount, pay_mode=pay_mode, balance_amnt=balance_amnt,pay_time=pay_time)
        obj.save()
        models.automatic1.objects.filter(id=1).update(fee_receipt_no=models.automatic1.objects.get(id=1).fee_receipt_no+1)
        messages.info(request, 'Do You want to print Receipt?')
        return redirect('Fee_Management')
    else:
        rs=models.automatic1.objects.get(id=1).fee_receipt_no
        rs=rs+1
        if rs<10:
            fee_receipt_no='Receipt00'+str(rs)
        elif rs<100:
            fee_receipt_no='Receipt0'+str(rs)
        else:
            fee_receipt_no='Receipt'+str(rs)
        return render (request, 'fee-and-finance-management.html',{'fee_receipt_no':fee_receipt_no})
        
def fee_and_finance_invoice(request):
    invoice= models.fee_management.objects.last()
    return render(request,'fee-and-finance_invoice.html',{"i":invoice})  
def print_invoice(request,iid):
    invoice=models.fee_management.objects.get(id=iid)
    return render(request,'fee-and-finance_invoice.html',{"i":invoice})  

def Fee_ser(request):
    fee_receipt_no=models.fee_management.objects.values('fee_receipt_no').distinct()
    adm_no=models.fee_management.objects.values('adm_no').distinct()
    s_name=models.fee_management.objects.values('s_name').distinct()
    balance_amnt=models.fee_management.objects.values('balance_amnt').distinct()
    if request.method == 'POST':
        fee_receipt_no=request.POST.get('fee_receipt_no')
        s_name=request.POST.get('s_name')
        adm_no=request.POST.get('adm_no')
        balance_amnt=request.POST.get('balance_amnt')
        f_date=request.POST.get('f_date')
        t_date=request.POST.get('t_date')
        url={}
        if fee_receipt_no !="":
            url['fee_receipt_no']=fee_receipt_no
        if s_name !="":
            url['s_name']=s_name
        if adm_no !="":
            url['adm_no']=adm_no
        if balance_amnt !="":
            url['balance_amnt']=balance_amnt
        if f_date !="" and t_date !="":
            url['pay_date__range']=[f_date,t_date]
        obj =models.fee_management.objects.filter(**url)
        data= models.fee_management.objects.all()
        if obj.exists():
            return render (request, 'Fee_manage_Service.html', {'value': obj, 'val': data})
        else:
            messages.info(request, 'No records available.')
            return render (request, 'Fee_manage_Service.html', {'value': "", 'val': data})
    else:
        data= models.fee_management.objects.all()
        return render (request, 'Fee_manage_Service.html', {'val': data})
def pay_record_delete(request,iid):
    models.fee_management.objects.filter(id=iid).delete()
    return redirect('Fee_manage_service')

def fee_update(request,iid):
    update=models.fee_management.objects.get(id=iid)
    adm_no=models.student_adm.objects.get(adm_no=update.adm_no)
    
    if request.method=='POST':
        update.fee_receipt_no=request.POST.get('fee_receipt_no')
        update.adm_no=request.POST.get('adm_no')
        
        update.s_name=request.POST.get('s_name')
        update.f_name=request.POST.get('f_name')
        update.s_class=request.POST.get('s_class')
        update.roll=request.POST.get('roll')
        update.phone=request.POST.get('phone')
        update.month_name=request.POST.get('month_name')
        update.fee=request.POST.get('fee')
        update.late_fee=request.POST.get('late_fee')
        update.total_fee=request.POST.get('total_fee')
        update.due_date=request.POST.get('due_date')
        update.pay_date=request.POST.get('pay_date')
        update.pay_amount=request.POST.get('pay_amount')
        update.pay_mode=request.POST.get('pay_mode')
        update.balance_amnt=request.POST.get('balance_amnt')
        update.pay_time=request.POST.get('pay_time')
        update.save()
        messages.success(request,'Records Updated')
        return redirect('Fee_Management')
    else:
        return render(request,'fee-and-finance_update.html',{"u":update, 'pic': adm_no.s_pic})
        





#################          Employee section         #############################






def employee(request):
    if request.method =='POST':
        e_id=request.POST.get('e_id')
        e_name=request.POST.get('e_name')
        e_pic=request.FILES.get('e_pic')
        e_sign=request.FILES.get('e_sign')
        gender=request.POST.get('gender')
        e_dob=request.POST.get('e_dob')
        e_phone=request.POST.get('e_phone')
        e_email=request.POST.get('e_email')
        e_bgroup=request.POST.get('e_bgroup')
        e_quali=request.POST.get('e_quali')
        e_speci=request.POST.get('e_speci')
        e_ldesign=request.POST.get('e_ldesign')
        e_lorg=request.POST.get('e_lorg')
        nation=request.POST.get('nation')
        religion=request.POST.get('religion')
        cast=request.POST.get('cast')
        e_econt=request.POST.get('e_econt')
        e_fname=request.POST.get('e_fname')
        e_mname=request.POST.get('e_mname')
        martial=request.POST.get('martial')
        e_sname=request.POST.get('e_sname')
        e_designation=request.POST.get('e_designation')
        e_worktime=request.POST.get('e_worktime')
        e_intime=request.POST.get('e_intime')
        e_outtime=request.POST.get('e_outtime')
        e_bsalary=request.POST.get('e_bsalary')
        e_da=request.POST.get('e_da')
        e_hra=request.POST.get('e_hra')
        e_bankname=request.POST.get('e_bankname')
        holder_name=request.POST.get('holder_name')
        e_acntnumber=request.POST.get('e_acntnumber')
        c_acntnumber=request.POST.get('c_acntnumber')
        ifsc=request.POST.get('ifsc')
        b_passbook=request.FILES.get('b_passbook')
        s_accounttype=request.POST.get('s_accounttype')
        p_adrs=request.POST.get('p_adrs')
        p_pincode=request.POST.get('p_pincode')
        c_adrs=request.POST.get('c_adrs')
        c_pincode=request.POST.get('c_pincode')
        e_aadhar=request.FILES.get('e_aadhar')
        e_medical=request.FILES.get('e_medical')
        e_dl=request.FILES.get('e_dl')
        e_hquali=request.FILES.get('e_hquali')
        obj= models.employee_reg(e_id=e_id,e_name=e_name,e_pic=e_pic,e_sign=e_sign,gender=gender,e_dob=e_dob,e_phone=e_phone,e_email=e_email,e_bgroup=e_bgroup,e_quali=e_quali,e_speci=e_speci,e_ldesign=e_ldesign,e_lorg=e_lorg,nation=nation,religion=religion,cast=cast,e_econt=e_econt,e_fname=e_fname,e_mname=e_mname,martial=martial,e_sname=e_sname,e_designation=e_designation,e_worktime=e_worktime,e_intime=e_intime,e_outtime=e_outtime,e_bsalary=e_bsalary,e_da=e_da,e_hra=e_hra,e_bankname=e_bankname,holder_name=holder_name,e_acntnumber=e_acntnumber,c_acntnumber=c_acntnumber,ifsc=ifsc,b_passbook=b_passbook,s_accounttype=s_accounttype,p_adrs=p_adrs,p_pincode=p_pincode,c_adrs=c_adrs,c_pincode=c_pincode,e_aadhar=e_aadhar,e_medical=e_medical,e_dl=e_dl,e_hquali=e_hquali)
        obj.save()
        models.automatic1.objects.filter(id=1).update(e_id=models.automatic1.objects.get(id=1).e_id+1)
        messages.success(request,'Record Sucessfully Inserted')
        return redirect(reverse('Employee_Registration'))
    else:
        rs=models.automatic1.objects.get(id=1).e_id
        rs=rs+1
        if rs<10:
            e_id='E00'+str(rs)
        elif rs<100:
            e_id='E0'+str(rs)
        else:
            e_id='E'+str(rs)
        return render (request,'employee.html',{'e_id':e_id})
def Emp_ser(request):
    e_id=models.employee_reg.objects.values('e_id').distinct()
    e_name=models.employee_reg.objects.values('e_name').distinct()
    e_phone=models.employee_reg.objects.values('e_phone').distinct()
    p_pincode=models.employee_reg.objects.values('p_pincode').distinct()
    data=models.employee_reg.objects.all()
    if request.method =='POST':
        e_id=request.POST.get('e_id')
        e_name=request.POST.get('e_name')
        e_phone=request.POST.get('e_phone')
        p_pincode=request.POST.get('p_pincode')
        url={}
        if e_id !="":
            url['e_id']=e_id
        if e_name !="":
            url['e_name']=e_name
        if e_phone !="":
            url['e_phone']=e_phone
        if p_pincode !="":
            url['p_pincode']=p_pincode
        if url:
            obj=models.employee_reg.objects.filter(**url)
            if obj.exists():
                return render(request,'Employee_Reg_Service.html',{'value':obj,'val':data})
            else:
                messages.info(request, 'No records available.')
                return redirect('Employee_Registration_Service')
        return render(request,'Employee_Reg_Service.html', {'value':data, 'val': data})
    else:
        data=models.employee_reg.objects.all()
        return render (request, 'Employee_Reg_Service.html', {'value':'', 'val': data})
def Emp_Reg_delete(request,iid):
    models.employee_reg.objects.filter(id=iid).delete()
    return redirect('Employee_Registration_Service')   
def employee_reg_update(request,iid):
    update=models.employee_reg.objects.get(id=iid)
    if request.method =='POST':
        update.e_id=request.POST.get('e_id')
        update.e_name=request.POST.get('e_name')
        if request.FILES.get('e_pic'):
            update.e_pic=request.FILES.get('e_pic')
        if request.FILES.get('e_sign'):
            update.e_sign=request.FILES.get('e_sign')
        update.gender=request.POST.get('gender')
        update.e_dob=request.POST.get('e_dob')
        update.e_phone=request.POST.get('e_phone')
        update.e_email=request.POST.get('e_email')
        update.e_bgroup=request.POST.get('e_bgroup')
        update.e_quali=request.POST.get('e_quali')
        update.e_speci=request.POST.get('e_speci')
        update.e_ldesign=request.POST.get('e_ldesign')
        update.e_lorg=request.POST.get('e_lorg')
        update.nation=request.POST.get('nation')
        update.religion=request.POST.get('religion')
        update.cast=request.POST.get('cast')
        update.e_econt=request.POST.get('e_econt')
        update.e_fname=request.POST.get('e_fname')
        update.e_mname=request.POST.get('e_mname')
        update.martial=request.POST.get('martial')
        update.e_sname=request.POST.get('e_sname')
        update.e_designation=request.POST.get('e_designation')
        update.e_worktime=request.POST.get('e_worktime')
        if request.POST.get('e_intime'):
            update.e_intime=request.POST.get('e_intime')
        if request.POST.get('e_outtime'):
            update.e_outtime=request.POST.get('e_outtime')
        update.e_bsalary=request.POST.get('e_bsalary')
        update.e_da=request.POST.get('e_da')
        update.e_hra=request.POST.get('e_hra')
        update.e_bankname=request.POST.get('e_bankname')
        update.holder_name=request.POST.get('holder_name')
        update.e_acntnumber=request.POST.get('e_acntnumber')
        update.c_acntnumber=request.POST.get('c_acntnumber')
        update.ifsc=request.POST.get('ifsc')
        if request.FILES.get('b_passbook'):
            update.b_passbook=request.FILES.get('b_passbook')
        update.s_accounttype=request.POST.get('s_accounttype')
        update.p_adrs=request.POST.get('p_adrs')
        update.p_pincode=request.POST.get('p_pincode')
        update.c_adrs=request.POST.get('c_adrs')
        update.c_pincode=request.POST.get('c_pincode')
        if request.FILES.get('e_aadhar'):
            update.e_aadhar=request.FILES.get('e_aadhar')
        if request.FILES.get('e_medical'):
            update.e_medical=request.FILES.get('e_medical')
        if request.FILES.get('e_dl'):
            update.e_dl=request.FILES.get('e_dl')
        if request.FILES.get('e_hquali'):
            update.e_hquali=request.FILES.get('e_hquali')
        update.save()
        messages.success(request,'Record Sucessfully updated')
        return render(request,'employee.html')
    else:
      return render (request,'employee_update.html',{"u":update})  
def Emp_pay(request):
    if request.method =='POST':
        eid=request.POST.get('eid')
        payment_mode=request.POST.get('payment_mode')
        payment_amount=request.POST.get('payment_amount')
        balance_amount=request.POST.get('balance_amount')
        payment_date=request.POST.get('payment_date')
        obj=models.employee_payment(eid=eid,payment_mode=payment_mode,payment_amount=payment_amount,balance_amount=balance_amount,payment_date=payment_date)
        obj.save()
        messages.success(request,'payement_sucessful')
        return redirect(reverse('staff-payment'))
    else:
        return render(request,'staff-payment.html')
    
def pay_records(request):
    search ={
        'payment_mode':models.employee_payment.objects.values('payment_mode').distinct(),
    }
    data=models.employee_payment.objects.all()
    if request.method =='POST':
        eid=request.POST.get('eid')
        payment_mode=request.POST.get('payment_mode')
        payment_date=request.POST.get('payment_date')
        url={}
        if eid !="":
            url['eid']=eid
        if payment_mode is not None:
            url['payment_mode']=payment_mode
        if payment_date !="":
            url['payment_date']=payment_date
        if url:
            obj=models.employee_payment.objects.filter(**url)
            if obj.exists():
                return render(request,'payment_records.html',{'value':obj,'val':data,'src':search})
            else:
                messages.info(request, 'No records available.')        
                return render(request,'payment_records.html', {'value':'', 'val': data,'src':search})
        else:
            messages.warning(request, 'Please Select Anyone!!')        
            return render(request,'payment_records.html', {'value':'', 'val': data,'src':search})
    else:
        data=models.employee_payment.objects.all()
        return render(request,'payment_records.html',{'value':'','val':data,'src':search})
def Emp_payment_delete(request,iid):
    models.employee_payment.objects.filter(id=iid).delete()
    return redirect('Payment_records')   
def Emp_payment_update(request,iid):
    update=models.employee_payment.objects.get(id=iid)
    if request.method =='POST':
        update.eid=request.POST.get('eid')
        update.payment_mode=request.POST.get('payment_mode')
        update.payment_amount=request.POST.get('payment_amount')
        update.balance_amount=request.POST.get('balance_amount')
        update.payment_date=request.POST.get('payment_date')
        update.save()
        messages.success(request,'Record Sucessfully updated')
        return render(request,'payment_records.html')
    else:
        return render(request,'staff-payment_update.html',{"u":update}) 
    
    
    
    
    
    
    
##############        Leave Section    ###########################






def leave(request):
    data=models.leave_management.objects.all()
    if request.method == 'POST':
        eid=request.POST.get('eid')
        leave_type=request.POST.get('leave_type')
        name=request.POST.get('name')
        duration=request.POST.get('duration')
        f_date=request.POST.get('f_date')
        t_date=request.POST.get('t_date')
        discription=request.POST.get('discription')
        obj=models.leave_management(eid=eid,leave_type=leave_type,name=name,duration=duration,f_date=f_date,t_date=t_date,discription=discription)
        obj.save()
        messages.success(request,'Leave Applied')
        return redirect('Leave_Management')
    else:
        return render(request,'Leave management.html', {'value':data})
def leave_ser(request):
    search ={
        'leave_type':models.leave_management.objects.values('leave_type').distinct(),
    }
    data=models.leave_management.objects.all()
    if request.method=='POST':
        leave_type=request.POST.get('leave_type')
        f_date=request.POST.get('f_date')
        t_date=request.POST.get('t_date')
        url={}
        if leave_type is not None:
            url['leave_type']=leave_type
        if f_date != "" and t_date !="":
            url['f_date__range'] = [f_date,t_date]
        if url:
            obj=models.leave_management.objects.filter(**url)
            if obj.exists():
                return render(request,'leave_service.html',{'value':obj, 'val': data,'src':search})
            else:
                messages.info(request,'No Such Records')
                return render(request,'leave_service.html',{'value':'', 'val': data,'src':search})
        else:
            messages.warning(request, 'Please Select Anyone!!') 
            return render(request,'leave_service.html', {'value':'', 'val': data,'src':search})   
    else:
        data=models.leave_management.objects.all()
        return render(request,'Leave_service.html', {'value':'','val': data,'src':search})
def leave_delete(request,iid):
    models.leave_management.objects.filter(id=iid).delete()
    return redirect('Leave_service')  
def leave_management_update(request,iid):
    update=models.leave_management.objects.get(id=iid)
    if request.method=='POST':
        update.eid=request.POST.get('eid')
        update.leave_type=request.POST.get('leave_type')
        update.name=request.POST.get('name')
        update.duration=request.POST.get('duration')
        update.f_date=request.POST.get('f_date')
        update.t_date=request.POST.get('t_date')
        update.discription=request.POST.get('discription')
        update.save()
        messages.success(request,'Leave Application Updated')
        return render(request,'Leave management.html')
    else:
        return render(request,'Leave_management_update.html',{"u":update})
    
    
    
    

def timetable(request):
    # data = models.employee_reg.objects.filter(e_designation="teacher").values('ename', 'eid')
    # print(data)

    return render(request,'time-table.html')
def timetable_ser(request):
    return render(request,'time_table_service.html')



#############################################   Exam Section     #######################################################################


def registered(request, iid):
    data={
        'all_students' : models.fee_management.objects.all(),
        'approved_students' : models.exam_reg.objects.get(examid=iid)
    }
    return render (request, 'exam_registered_student.html',{'data':data})


def Examreg (request):
    examid =models.exam_details.objects.values('examid').distinct()
    if request.method == 'POST':
        try :
            examid= request.POST.get('examid')
            a_students = models.exam_reg.objects.get(examid=examid)
            approved= request.POST.getlist('approved')
            a_students.admno = approved
            a_students.save()
            data={
                'all_students' : models.fee_management.objects.all(),
                'approved_students' : models.exam_reg.objects.get(examid=examid)
            } 
            return render (request, 'exam_registered_student.html',{'data':data})
        except models.exam_reg.DoesNotExist:
            approved= request.POST.getlist('approved')
            examid= request.POST.get('examid')
            e_type = request.POST.get('examtype')
            s_class = request.POST.get('s_class')
            obj = models.exam_reg(admno=approved,examid=examid,examtype=e_type, s_class=s_class, status='Approved')
            messages.success(request,'Registration Completed')
            obj.save()
            data={
                'all_students' : models.fee_management.objects.all(),
                'approved_students' : models.exam_reg.objects.get(examid=examid)
            } 
            return render (request, 'exam_registered_student.html',{'data':data})

    if request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':
        if request.method == "GET":
            examid = request.GET.get('examid')
            student = models.exam_details.objects.get(examid=examid)            
            s_src = models.fee_management.objects.filter(s_class=student.s_class)
            
            value ='<tr></tr><tr><th style="width: 8%;text-align:center; "><input type="checkbox" id="selectall"></th><th><label for="">Admission No</label></th><th><label for="">Student Name</label></th><th> <label for="">Father Name</label></th><th> <label for="">Phone No.</label></th><th> <label for="">Due Amount</label></th><th> <label for="">Status</label></th></tr>'
            for x in s_src:
                value += f'<tr><td><input type="checkbox" name="approved" value="{x.adm_no}"'
                try :
                    a_students = models.exam_reg.objects.get(examid=examid)
                    if x.adm_no in a_students.admno :
                        value += f' checked class="selected"/></td><td>{x.adm_no}</td><td>{x.s_name}</td><td>{x.f_name}</td><td>{x.phone}</td><td>{x.balance_amnt}</td><td class="status" style="color:green;">Approved</td></tr>'
                    else:
                        value += f'class="selected"/></td><td>{x.adm_no}</td><td>{x.s_name}</td><td>{x.f_name}</td><td>{x.phone}</td><td>{x.balance_amnt}</td><td class="status" style="color:red;">Not Approved</td></tr>'   
                except models.exam_reg.DoesNotExist:
                    pass
                # value += f'class="selected"/></td><td>{x.adm_no}</td><td>{x.s_name}</td><td>{x.f_name}</td><td>{x.phone}</td><td>{x.balance_amnt}</td><td class="status" style="color:red;">Not Approved</td></tr>'
            response_data = {
                'success': True,
                'data': student.exam_type,
                's_class': student.s_class,
                'value':value,      
            }
            return http.JsonResponse(response_data,safe=False)     
    return render (request, 'Exam_Reg.html',{'exam':examid})




def Examdet(request):
    if request.method =='POST':
        examid=request.POST.get('examid')
        exam_type=request.POST.get('exam_type')
        s_class=request.POST.get('s_class')
        exam_start_date=request.POST.get('exam_start_date')
        exam_end_date=request.POST.get('exam_end_date')
        duration=request.POST.get('duration')
        obj =models.exam_details(examid=examid,exam_type=exam_type,exam_start_date=exam_start_date,s_class=s_class,exam_end_date=exam_end_date,duration=duration)
        obj.save()
        models.automatic1.objects.filter(id=1).update(examid=models.automatic1.objects.get(id=1).examid+1)
        messages.success(request,'Exam Registered')
        return redirect('Exam_Details')
    else:
        rs=models.automatic1.objects.get(id=1).examid
        rs=rs+1
        if rs<10:
            examid='Exam00'+str(rs)
        elif rs<100:
            examid='Exam0'+str(rs)
        else:
            examid='Exam'+str(rs)
        return render(request,'Exam_details.html',{'examid':examid})
def exam_detail_update(request,iid):
    update=models.exam_details.objects.get(id=iid)
    if request.method == 'POST':
        update.examid=request.POST.get('examid')
        update.exam_type=request.POST.get('exam_type')
        update.s_class=request.POST.get('s_class')
        update.exam_start_date=request.POST.get('exam_start_date')
        update.exam_end_date=request.POST.get('exam_end_date')
        update.duration=request.POST.get('duration')
        update.save()
        messages.success(request,'Record Sucessfully updated')
        return render(request,'Exam_details_update.html')
    else:
        return render (request,'Exam_details_update.html',{"u":update})
def exam_details_src(request):
    examid=models.exam_details.objects.values('examid')
    data=models.exam_details.objects.all()
    if request.method =='POST':
        examid=request.POST.get('examid')
        url={}
        if examid !="":
            url['examid']=examid
        if url:
            obj=models.exam_details.objects.filter(**url)
            if obj.exists():
                return render(request,'Exam_details_src.html',{'value':obj,'val':data})
            else:
                return redirect('Exam_Details_src')
    
        return render(request,'Exam_details_src.html', {'value':data, 'val': data})
    else:
        data=models.exam_details.objects.all()
        return render(request,'Exam_details_src.html', {'value':'', 'val': data})
def exam_details_delete(request,iid):
    models.exam_details.objects.filter(id=iid).delete()
    return redirect('Exam_Details_src')

def Examschedule(request):
    examid=models.exam_details.objects.values('examid')
    if request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':
        if request.method == "GET":
            examid = request.GET.get('examid')
            ex_id = models.exam_details.objects.get(examid=examid)
            response_data = {
                'success': True,
                'e_type': ex_id.exam_type,
                's_class': ex_id.s_class,
                'exam_start_date': ex_id.exam_start_date,
                'exam_end_date': ex_id.exam_end_date,
                'duration': ex_id.duration,
                    
    
            }
            return http.JsonResponse(response_data,safe=False)
    if request.method == 'POST':
        examid = request.POST.get('examid')
        
        exam_type= request.POST.get('exam_type')
        s_class= request.POST.get('s_class')
        exam_start_date= request.POST.get('exam_start_date')
        exam_end_date= request.POST.get('exam_end_date')
        exam_end_date= request.POST.get('exam_end_date')
        duration= request.POST.get('duration')
        exam_date= request.POST.getlist('exam_date')
        subject= request.POST.getlist('subject')
        exam_slot= request.POST.getlist('exam_slot')
        exam_time= request.POST.getlist('exam_time')
        total_marks= request.POST.getlist('total_marks')
        invigilator= request.POST.getlist('invigilator')
        obj = models.exam_schedule(examid=examid,exam_type=exam_type,s_class=s_class,exam_start_date=exam_start_date,exam_end_date=exam_end_date,duration=duration,exam_date=exam_date,subject=subject,exam_slot=exam_slot,exam_time=exam_time,total_marks=total_marks,invigilator=invigilator)
        obj.save()
        messages.success(request, 'Exam Sheduled')
        return redirect('Exam_Schedules')
    else:
        return render(request,'Exam_schedule.html',{'value':examid})

def exam_schedule_src(request):
    
    data= models.exam_schedule.objects.all()
    s_class= models.exam_schedule.objects.values('s_class').distinct()
    exam_type= models.exam_schedule.objects.values('exam_type').distinct()
    if request.method == 'POST':
        examid = request.POST.get('examid')
        exam_type =request.POST.get('exam_type')
        s_class =request.POST.get('s_class')
        url={}
        if examid != 'none':
            url['examid']=examid
        if exam_type != 'none':
            url['exam_type']=exam_type
        if s_class != 'none':
            url['s_class']=s_class
        if url:
            obj = models.exam_schedule.objects.filter(**url)
            if obj.exists():
                return render(request,'Exam_schedule_src.html',{'value':obj,'val':data,'s':s_class,'exam':exam_type})
            else:
                messages.info(request, 'No records available.')
        return render(request,'Exam_schedule_src.html',{'value':'','val':data,'s':s_class,'exam':exam_type})
    else:
        data=models.exam_schedule.objects.all()
        return render(request,'Exam_schedule_src.html', {'value':'', 'val': data,'s':s_class,'exam':exam_type})
def exam_schedule_update(request,iid):
    update=models.exam_schedule.objects.get(id=iid)
    if request.method =='POST':
        update.examid = request.POST.get('examid')
        update.exam_type= request.POST.get('exam_type')
        update.s_class= request.POST.get('s_class')
        update.exam_start_date= request.POST.get('exam_start_date')
        update.exam_end_date= request.POST.get('exam_end_date')
        update.exam_end_date= request.POST.get('exam_end_date')
        update.duration= request.POST.get('duration')
        update.exam_date= request.POST.getlist('exam_date')
        update.subject= request.POST.getlist('subject')
        update.exam_slot= request.POST.getlist('exam_slot')
        update.exam_time= request.POST.getlist('exam_time')
        update.total_marks= request.POST.getlist('total_marks')
        update.invigilator= request.POST.getlist('invigilator')
        update.save()
        messages.success(request,'Record Sucessfully updated')
        return render(request,'Exam_schedule_update.html',{'u':update})
    else:
        print(update.subject)
        return render (request,'Exam_schedule_update.html',{"u":update})
def exam_routine(request,iid):
    record=models.exam_schedule.objects.get(id=iid)
    return render(request,'exam_routine.html',{"record":record}) 
def exam_schedule_delete(request,iid):
    models.exam_schedule.objects.filter(id=iid).delete()
    return redirect('Exam_schedule_src')
def transporter_detail(request):
    if request.method =='POST':
        t_id=request.POST.get('t_id')
        t_name=request.POST.get('t_name')
        t_pic=request.FILES.get('t_pic')
        t_sign=request.FILES.get('t_sign')
        gender=request.POST.get('gender')
        t_phone=request.POST.get('t_phone')
        t_email=request.POST.get('t_email')
        t_bgroup=request.POST.get('t_bgroup')
        vehicle=request.POST.get('vehicle')
        v_no=request.POST.get('v_no')
        v_capacity=request.POST.get('v_capacity')
        f_charge=request.POST.get('f_charge')
        t_bankname=request.POST.get('t_bankname')
        holder_name=request.POST.get('holder_name')
        t_acntnumber=request.POST.get('t_acntnumber')
        c_acntnumber=request.POST.get('c_acntnumber')
        ifsc=request.POST.get('ifsc')
        t_accounttype=request.POST.get('t_accounttype')
        obj=models.transporter_details(t_id=t_id,t_name=t_name,t_gender=gender,t_contact=t_phone,t_email=t_email,t_bgroup=t_bgroup,t_vehicletype=vehicle,t_vehiclenumber=v_no,t_capacity=v_capacity,t_farecharge=f_charge,t_bankname=t_bankname,t_a_holdername=holder_name,t_a_number=t_acntnumber,t_ca_number=c_acntnumber,t_ifsc=ifsc,t_accounttype=t_accounttype,t_pic=t_pic, t_sign=t_sign)
        obj.save()
        models.automatic1.objects.filter(id=1).update(t_id=models.automatic1.objects.get(id=1).t_id+1)
        messages.success(request,'Record Sucessfully Inserted')
        return redirect(reverse('transporter_detail'))
    else:
        rs=models.automatic1.objects.get(id=1).t_id
        rs=rs+1
        if rs<10:
            t_id='T00'+str(rs)
        elif rs<100:
            t_id='T0'+str(rs)
        else:
            t_id='T'+str(rs)
    return render(request,'Transporter_detail.html',{'t_id':t_id})
def Transporter_src(request):
    data=models.transporter_details.objects.all()
    t_vehicletype= models.transporter_details.objects.values('t_vehicletype').distinct()
    t_vehiclenumber= models.transporter_details.objects.values('t_vehiclenumber').distinct()
    if request.method == 'POST':
        t_id = request.POST.get('t_id')
        t_vehicletype = request.POST.get('t_vehicletype')
        t_vehiclenumber = request.POST.get('t_vehiclenumber')
        url={}
        if t_id != 'none':
            url['t_id']=t_id
        if t_vehicletype !='none':
            url['t_vehicletype']=t_vehicletype
        if t_vehiclenumber !='none':
            url['t_vehiclenumber']=t_vehiclenumber
        if url:
            obj = models.transporter_details.objects.filter(**url)
            if obj.exists():
                return render(request,'Transporter_detail_src.html',{'value':obj,'val':data,'v_t':t_vehicletype,'t_vn':t_vehiclenumber})
            else:
                messages.info(request, 'No records available.')
        return render(request,'Transporter_detail_src.html',{'value':'','val':data,'v_t':t_vehicletype,'t_vn':t_vehiclenumber})
    else:
        data=models.transporter_details.objects.all()
        return render(request,'Transporter_detail_src.html', {'value':'', 'val': data,'v_t':t_vehicletype,'t_vn':t_vehiclenumber})
def transporter_delete(request,iid):
    models.transporter_details.objects.filter(id=iid).delete()
    return redirect('Transporter_src')
def transporter_update(request,iid):
    update=models.transporter_details.objects.get(id=iid)
    if request.method =='POST':
        update.t_id=request.POST.get('t_id')
        update.t_name=request.POST.get('t_name')
        if request.FILES.get('t_pic'):
            update.t_pic=request.FILES.get('t_pic')
        if request.FILES.get('t_sign'):
            update.t_sign=request.FILES.get('t_sign')
        update.t_gender=request.POST.get('gender')
        update.t_contact=request.POST.get('t_phone')
        update.t_email=request.POST.get('t_email')
        update.t_bgroup=request.POST.get('t_bgroup')
        update.t_vehicletype=request.POST.get('vehicle')
        update.t_vehiclenumber=request.POST.get('v_no')
        update.t_capacity=request.POST.get('v_capacity')
        update.t_farecharge=request.POST.get('f_charge')
        update.t_bankname=request.POST.get('t_bankname')
        update.t_a_holdername=request.POST.get('holder_name')
        update.t_a_number=request.POST.get('t_acntnumber')
        update.t_ca_number=request.POST.get('c_acntnumber')
        update.t_ifsc=request.POST.get('ifsc')
        update.t_accounttype=request.POST.get('t_accounttype')
        update.save()
        messages.success(request,'Record Sucessfully updated')
        return render(request,'Transporter_detail_src.html')
    else:
        return render(request,'Transporter_detail_update.html',{'u':update})
    
def route_plan(request):
    return render(request,'route_plan.html')

def inventory_management(request):
    return render(request,'Inventory_management.html')
# Create your views here.

