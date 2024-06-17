from django.contrib import admin
from django.urls import path,include
from School_Management_app import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
   path('admin/', admin.site.urls),
   path('', views.index,name='index'),
   path('Student_Registration/', views.Registration,name='Student_Registration'),
   path('Student_Registration_update/<iid>/', views.Student_reg_update,name='Student_Registration_update'),
   path('Student_Registration_Service/', views.Reg_ser,name='Student_Registration_Service'),
   path('Student_Reg_delete/<iid>/',views.Student_Reg_delete,name='Student_Reg_delete'),
   path('Student_Admission_Service/', views.Adm_ser,name='Student_Admission_Service'),
   path('Student_Adm_delete/<iid>/',views.Student_Adm_delete,name='Student_Adm_delete'),
   
   path('Student_Admission_update/<iid>/', views.student_adm_update,name='Student_Admission_update'),
   path('Student_Addmission/', views.Addmission,name='Student_Addmission'),
   path('Reg-service/', views.Reg_ser,name='Reg-service'),
   
   path('Employee_Registration', views.employee,name='Employee_Registration'),
   path('Employee_Registration_Service/', views.Emp_ser,name='Employee_Registration_Service'),
   path('Emp_Reg_delete/<iid>/',views.Emp_Reg_delete,name='Emp_Reg_delete'),
   path('employee_reg_update/<iid>/', views.employee_reg_update,name='employee_reg_update'),
   path('Payment_records/', views.pay_records,name='Payment_records'),
   path('staff-payment/', views.Emp_pay,name='staff-payment'),
   path('Emp_payment_delete/<iid>/',views.Emp_payment_delete,name='Emp_payment_delete'),
   path('Emp_payment_update/<iid>',views.Emp_payment_update,name='Emp_payment_update'),
   path('Leave_Management/', views.leave,name='Leave_Management'),
   path('Leave_service/', views.leave_ser,name='Leave_service'),
   path('leave_delete/<iid>',views.leave_delete,name='leave_delete'),
   path('leave_management_update/<iid>',views.leave_management_update,name='leave_management_update'),
   
   
   path('Fee_Management/', views.fees,name='Fee_Management'),
   path('fee_and_finance_invoice/', views.fee_and_finance_invoice,name='fee_and_finance_invoice'),
   path('Fee_manage_service/', views.Fee_ser,name='Fee_manage_service'),
   path('pay_record_delete/<iid>/',views.pay_record_delete,name='pay_record_delete'),
   path('print_invoice/<iid>/',views.print_invoice,name='print_invoice'),
   path('fee_update/<iid>/',views.fee_update,name='fee_update'),
   
   
   
   path('Time_Table/', views.timetable,name='Time_Table'),
   path('Time_Table_service/', views.timetable_ser,name='Time_Table_service'),
   path('Exam_Registration/', views.Examreg,name='Exam_Registration'),
   path('Exam_Details/', views.Examdet,name='Exam_Details'),
   path('Exam_Details_src/', views.exam_details_src,name='Exam_Details_src'),
   path('exam_detail_update/<iid>/', views.exam_detail_update,name='exam_detail_update'),
   path('Exam_schedule_src/', views.exam_schedule_src,name='Exam_schedule_src'),
   path('Exam_Schedules/', views.Examschedule,name='Exam_Schedules'),
   path('exam_schedule_update/<iid>/', views.exam_schedule_update,name='exam_schedule_update'),
   path('exam_schedule_delete/<iid>/', views.exam_schedule_delete,name='exam_schedule_delete'),
   
   path('exam_routine/<iid>/', views.exam_routine,name='exam_routine'),
   path('Registered-students/', views.registered,name='registered'),
   path('transporter_detail/', views.transporter_detail,name='transporter_detail'),
   path('Transporter_src/', views.Transporter_src,name='Transporter_src'),
   path('transporter_delete/<iid>/', views.transporter_delete,name='transporter_delete'),
   path('transporter_update/<iid>/', views.transporter_update,name='transporter_update'),
   path('route_plan/', views.route_plan,name='route_plan'),
   path('inventory_management/', views.inventory_management,name='inventory_management'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)