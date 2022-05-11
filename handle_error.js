const error=
{
    validationError:{
        code: 400,
        message: {message:'تأكد من المدخلات'}
    },
    loginError:{
        code: 400,
        message: {message:'اسم المستخدم او كلمة المرور خطأ '}
    },
    unauthenticated:{
        code: 401,
        message: {message:'لم يتم تسجيل الدخول  المصادقة مطلوبة لاتمام هذه العملية'}
    },
    proccessError: {code: 503, message:'حدث خطأ أثناء تنفيذ العملية'}
}

module.exports =error;