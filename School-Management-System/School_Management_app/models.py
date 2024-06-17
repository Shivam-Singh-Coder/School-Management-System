from django.db import models
 
from django.contrib.auth.models import UserManager as BaseUserManager, AbstractBaseUser
class user(models.Model):
    def create_user(self, username, email, password=None, is_active=True, **extra_fields):
        """Create and save a User with the given username and password."""
        user = self._create_user(username, email, password, False, True, False, **extra_fields)
        
# Create your models here.
class automatic1(models.Model):
    reg_no=models.IntegerField()
    adm_no=models.IntegerField(default=0)
    fee_receipt_no=models.IntegerField(default=0)
    #for employee
    e_id=models.IntegerField(default=0)
    #for__exam__ID
    examid=models.IntegerField(default=0)  
    #for__Transporter__ID
    t_id=models.IntegerField(default=0)    
    
class student_reg(models.Model):
    reg_no=models.CharField(max_length=50,blank=True, null=True )
    date=models.DateField(max_length=50,blank=True, null=True )
    name=models.CharField(max_length=50 ,blank=True, null=True )
    s_pic=models.FileField(upload_to="student_information",blank=True, null=True )
    s_sign=models.FileField(upload_to="student_information",blank=True, null=True )
    gender=models.CharField(max_length=50,blank=True, null=True )
    dob=models.CharField(max_length=50,blank=True, null=True )
    phone_no=models.CharField(max_length=50,blank=True, null=True )
    email=models.CharField(max_length=50,blank=True, null=True )
    b_group=models.CharField(max_length=50,blank=True, null=True )
    i_mark=models.CharField(max_length=50,blank=True, null=True )
    disable=models.CharField(max_length=50,blank=True, null=True )
    pre_school=models.CharField(max_length=50,blank=True, null=True )
    pre_class=models.CharField(max_length=50,blank=True, null=True )
    pre_board=models.CharField(max_length=50,blank=True, null=True )
    nation=models.CharField(max_length=50,blank=True, null=True )
    religion=models.CharField(max_length=50,blank=True, null=True )
    cast=models.CharField(max_length=50,blank=True, null=True )
    #father detail
    f_name=models.CharField(max_length=50,blank=True, null=True )
    f_cont=models.CharField(max_length=50,blank=True, null=True )
    f_email=models.CharField(max_length=50,blank=True, null=True )
    f_quali=models.CharField(max_length=50,blank=True, null=True )
    f_occup=models.CharField(max_length=50,blank=True, null=True )
    f_org=models.CharField(max_length=50,blank=True, null=True )
    f_pic=models.FileField(upload_to="student_information",blank=True, null=True)
    #mother detail
    m_name=models.CharField(max_length=50,blank=True, null=True )
    m_cont=models.CharField(max_length=50,blank=True, null=True )
    m_email=models.CharField(max_length=50,blank=True, null=True )
    m_quali=models.CharField(max_length=50,blank=True, null=True )
    m_occup=models.CharField(max_length=50,blank=True, null=True )
    m_org=models.CharField(max_length=50,blank=True, null=True )
    m_pic=models.FileField(upload_to="student_information",blank=True, null=True)
    #anual income
    a_income=models.CharField(max_length=50,blank=True, null=True)
    #address
    p_adrs=models.CharField(max_length=50,blank=True, null=True )
    p_pincode=models.CharField(max_length=50,blank=True, null=True )
    c_adrs=models.CharField(max_length=50,blank=True, null=True )
    C_pincode=models.CharField(max_length=50,blank=True, null=True )
    #document
    aadhar=models.FileField(upload_to="student_information",blank=True, null=True)
    f_aadhar=models.FileField(upload_to="student_information",blank=True, null=True)
    m_aadhar=models.FileField(upload_to="student_information",blank=True, null=True)
    s_medical=models.FileField(upload_to="student_information",blank=True, null=True)
    S_tc=models.FileField(upload_to="student_information",blank=True, null=True)

class student_adm(models.Model):
    reg_no=models.CharField(max_length=50,blank=True,null=True)
    adm_no=models.CharField(max_length=50,blank=True,null=True)
    session=models.CharField(max_length=50,blank=True,null=True)
    name=models.CharField(max_length=50,blank=True,null=True)
    roll_no=models.CharField(max_length=50,blank=True,null=True)
    dob=models.CharField(max_length=50,blank=True,null=True)
    s_class=models.CharField(max_length=50,blank=True,null=True)
    section=models.CharField(max_length=50,blank=True,null=True)
    gender=models.CharField(max_length=50,blank=True,null=True)
    e_mail=models.CharField(max_length=50,blank=True,null=True)
    phone=models.CharField(max_length=50,blank=True,null=True)
    b_group=models.CharField(max_length=50,blank=True,null=True)
    disable=models.CharField(max_length=50,blank=True,null=True)
    nation=models.CharField(max_length=50,blank=True,null=True)
    religion=models.CharField(max_length=50,blank=True,null=True)
    cast=models.CharField(max_length=50,blank=True,null=True)
    #sibling's Information
    sib_name=models.CharField(max_length=50,blank=True,null=True)
    sib_adm_no=models.CharField(max_length=50,blank=True,null=True)
    #parent's information
    f_name=models.CharField(max_length=50,blank=True,null=True)
    f_cont=models.CharField(max_length=50,blank=True,null=True)
    m_name=models.CharField(max_length=50,blank=True,null=True)
    m_cont=models.CharField(max_length=50,blank=True,null=True)
    annual=models.CharField(max_length=50,blank=True,null=True)
    #fee section
    adm_fee=models.CharField(max_length=50,blank=True,null=True)
    T_fee=models.CharField(max_length=50,blank=True,null=True)
    Trans_fee=models.CharField(max_length=50,blank=True,null=True)
    misc_fee=models.CharField(max_length=50,blank=True,null=True)
    dis_fee=models.CharField(max_length=50,blank=True,null=True)
    #address
    adrss=models.CharField(max_length=50,blank=True,null=True)
    pincode=models.CharField(max_length=50,blank=True,null=True)
    #document
    s_pic=models.FileField(upload_to="student_information",blank=True, null=True )
    s_sign=models.FileField(upload_to="student_information",blank=True, null=True )
    medical=models.FileField(upload_to="student_information",blank=True, null=True )
    
    
class fee_management(models.Model):
    fee_receipt_no=models.CharField(max_length=50,blank=True,null=True)
    adm_no=models.CharField(max_length=50,blank=True,null=True)
    s_name=models.CharField(max_length=50,blank=True,null=True)
    f_name=models.CharField(max_length=50,blank=True,null=True)
    s_class=models.CharField(max_length=50,blank=True,null=True)
    roll=models.CharField(max_length=50,blank=True,null=True)
    month_name=models.CharField(max_length=50,blank=True,null=True)
    fee=models.CharField(max_length=50,blank=True,null=True)
    phone=models.CharField(max_length=50,blank=True,null=True)
    late_fee=models.CharField(max_length=50,blank=True,null=True)
    total_fee=models.CharField(max_length=50,blank=True,null=True)
    due_date=models.DateField(max_length=50,blank=True,null=True)
    pay_date=models.DateField(max_length=50,blank=True,null=True)
    pay_amount=models.CharField(max_length=50,blank=True,null=True)
    pay_mode=models.CharField(max_length=50,blank=True,null=True)
    balance_amnt=models.CharField(max_length=50,blank=True,null=True)
    pay_time=models.CharField(max_length=50,blank=True,null=True)
   
    
    
    
    #employee Section begins#########################
class employee_reg(models.Model):
    e_id=models.CharField(max_length=50, blank=True,null=True)
    e_name=models.CharField(max_length=50, blank=True,null=True)
    e_pic=models.FileField(max_length=50, blank=True,null=True)
    e_sign=models.FileField(max_length=50, blank=True,null=True)
    gender=models.CharField(max_length=50, blank=True,null=True)
    e_dob=models.CharField(max_length=50, blank=True,null=True)
    e_phone=models.CharField(max_length=50, blank=True,null=True)
    e_email=models.CharField(max_length=50, blank=True,null=True)
    e_bgroup=models.CharField(max_length=50, blank=True,null=True)
    e_quali=models.CharField(max_length=50, blank=True,null=True)
    e_speci=models.CharField(max_length=50, blank=True,null=True)
    e_ldesign=models.CharField(max_length=50, blank=True,null=True)
    e_lorg=models.CharField(max_length=50, blank=True,null=True)
    nation=models.CharField(max_length=50, blank=True,null=True)
    religion=models.CharField(max_length=50, blank=True,null=True)
    cast=models.CharField(max_length=50, blank=True,null=True)
    e_econt=models.CharField(max_length=50, blank=True,null=True)
    e_fname=models.CharField(max_length=50, blank=True,null=True)
    e_mname=models.CharField(max_length=50, blank=True,null=True)
    martial=models.CharField(max_length=50, blank=True,null=True)
    e_sname=models.CharField(max_length=50, blank=True,null=True)
    e_designation=models.CharField(max_length=50, blank=True,null=True)
    e_worktime=models.CharField(max_length=50, blank=True,null=True)
    e_intime=models.CharField(max_length=50, blank=True,null=True)
    e_outtime=models.CharField(max_length=50, blank=True,null=True)
    e_bsalary=models.CharField(max_length=50, blank=True,null=True)
    e_da=models.CharField(max_length=50, blank=True,null=True)
    e_hra=models.CharField(max_length=50, blank=True,null=True)
    e_bankname=models.CharField(max_length=50, blank=True,null=True)
    holder_name=models.CharField(max_length=50, blank=True,null=True)
    e_acntnumber=models.CharField(max_length=50, blank=True,null=True)
    c_acntnumber=models.CharField(max_length=50, blank=True,null=True)
    ifsc=models.CharField(max_length=50, blank=True,null=True)
    b_passbook=models.FileField(max_length=50, blank=True,null=True)
    s_accounttype=models.CharField(max_length=50, blank=True,null=True)
    
    p_adrs=models.CharField(max_length=50, blank=True,null=True)
    p_pincode=models.CharField(max_length=50, blank=True,null=True)
    c_adrs=models.CharField(max_length=50, blank=True,null=True)
    c_pincode=models.CharField(max_length=50, blank=True,null=True)
    e_aadhar=models.FileField(max_length=50, blank=True,null=True)
    e_medical=models.FileField(max_length=50, blank=True,null=True)
    e_dl=models.FileField(max_length=50, blank=True,null=True)
    e_hquali=models.FileField(max_length=50, blank=True,null=True)

class employee_payment(models.Model):
    eid=models.CharField(max_length=50,blank=True,null=True )
    payment_mode=models.CharField(max_length=50,blank=True,null=True )
    payment_amount=models.CharField(max_length=50,blank=True,null=True )
    balance_amount=models.CharField(max_length=50,blank=True,null=True )
    payment_date=models.DateField(max_length=50,blank=True,null=True )

class leave_management(models.Model):
    eid=models.CharField(max_length=50,blank=True,null=True )
    leave_type=models.CharField(max_length=50,blank=True,null=True )
    name=models.CharField(max_length=50,blank=True,null=True)
    duration=models.CharField(max_length=50,blank=True,null=True)
    discription=models.CharField(max_length=50,blank=True,null=True)
    f_date=models.DateField(max_length=50,blank=True,null=True)
    t_date=models.DateField(max_length=50,blank=True,null=True)
    
    
####################            Exam Section      ###################################
    
class exam_reg(models.Model):
    examid=models.CharField(max_length=50,blank=True,null=True, unique=True )
    examtype=models.CharField(max_length=50,blank=True,null=True )
    s_class=models.CharField(max_length=50,blank=True,null=True )
    admno=models.CharField(max_length=2000,blank=True,null=True )
    status=models.CharField(max_length=50,blank=True,null=True )
    
class exam_details(models.Model):
    examid=models.CharField(max_length=50,blank=True,null=True )
    exam_type=models.CharField(max_length=50,blank=True,null=True )
    s_class=models.CharField(max_length=50,blank=True,null=True )
    exam_start_date=models.CharField(max_length=50,blank=True,null=True )
    exam_end_date=models.CharField(max_length=50,blank=True,null=True )
    duration=models.CharField(max_length=50,blank=True,null=True )

class exam_schedule(models.Model):
    examid=models.CharField(max_length=50,blank=True,null=True )
    exam_type=models.CharField(max_length=50,blank=True,null=True )
    s_class=models.CharField(max_length=50,blank=True,null=True )
    exam_start_date=models.CharField(max_length=50,blank=True,null=True )
    exam_end_date=models.CharField(max_length=50,blank=True,null=True )
    duration=models.CharField(max_length=50,blank=True,null=True )
    exam_date=models.CharField(max_length=50,blank=True,null=True )
    subject=models.CharField(max_length=50,blank=True,null=True )
    exam_slot=models.CharField(max_length=50,blank=True,null=True )
    exam_time=models.CharField(max_length=50,blank=True,null=True )
    total_marks=models.CharField(max_length=50,blank=True,null=True )
    invigilator=models.CharField(max_length=50,blank=True,null=True )
    
    
    
    
#############################  Transporter Details   #########################
class transporter_details(models.Model):
    t_id=models.CharField(max_length=50,blank=True,null=True, unique=True )
    t_name=models.CharField(max_length=50,blank=True,null=True )
    t_gender=models.CharField(max_length=50,blank=True,null=True )
    t_contact=models.CharField(max_length=50,blank=True,null=True )
    t_email=models.CharField(max_length=50,blank=True,null=True )
    t_bgroup=models.CharField(max_length=50,blank=True,null=True )
    t_vehicletype=models.CharField(max_length=50,blank=True,null=True )
    t_vehiclenumber=models.CharField(max_length=50,blank=True,null=True )
    t_capacity=models.CharField(max_length=50,blank=True,null=True )
    t_farecharge=models.CharField(max_length=50,blank=True,null=True )
    t_bankname=models.CharField(max_length=50,blank=True,null=True )
    t_a_holdername=models.CharField(max_length=50,blank=True,null=True )
    t_a_number=models.CharField(max_length=50,blank=True,null=True )
    t_ca_number=models.CharField(max_length=50,blank=True,null=True )
    t_ifsc=models.CharField(max_length=50,blank=True,null=True )
    t_accounttype=models.CharField(max_length=50,blank=True,null=True )
    t_pic=models.FileField(upload_to="student_information",blank=True, null=True )
    t_sign=models.FileField(upload_to="student_information",blank=True, null=True )
    
    