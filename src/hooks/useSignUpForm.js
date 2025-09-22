import { useState, useEffect } from 'react';

export const useSignUpForm = () => {
  const [formData, setFormData] = useState({
    CFName: "",
    CLName: "",
    CEmail: "",
    custype: "0",
    CCompany: "",
    CCountry: "AF",
    companyWebsite: "",
    agree1: false,
    agree2: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.CFName.trim()) {
      newErrors.CFName = "First name is required";
    }
    
    if (!formData.CLName.trim()) {
      newErrors.CLName = "Last name is required";
    }
    
    if (!formData.CEmail.trim()) {
      newErrors.CEmail = "Email is required";
    } else {
      // More comprehensive email validation
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (!emailRegex.test(formData.CEmail)) {
        newErrors.CEmail = "Please enter a valid email address";
      }
    }
    
    if (!formData.CCompany.trim()) {
      newErrors.CCompany = "Company name is required";
    }
    
    // URL validation for company website (optional field)
    if (formData.companyWebsite.trim()) {
      const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
      if (!urlRegex.test(formData.companyWebsite)) {
        newErrors.companyWebsite = "Please enter a valid website URL";
      }
    }
    
    if (!formData.agree1) {
      newErrors.agree1 = "You must agree to be an Internet telephone service provider";
    }
    
    if (!formData.agree2) {
      newErrors.agree2 = "You must agree to the terms of service";
    }
    
    if (!captchaVerified) {
      newErrors.captcha = "Please complete the captcha verification";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to admin panel
      window.location.href = "https://admin.didx.net/signup/NewSignupConfirm.php";
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Captcha callback function
  const onCaptchaChangeSignup = (response) => {
    if (response) {
      setCaptchaVerified(true);
      // Clear captcha error if it exists
      if (errors.captcha) {
        setErrors(prev => ({
          ...prev,
          captcha: ""
        }));
      }
    } else {
      setCaptchaVerified(false);
    }
  };

  // Setup captcha
  useEffect(() => {
    // Make captcha callback globally available
    window.onCaptchaChangeSignup = onCaptchaChangeSignup;
    
    const loadReCaptcha = () => {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };
    loadReCaptcha();
    
    // Cleanup
    return () => {
      if (window.onCaptchaChangeSignup) {
        delete window.onCaptchaChangeSignup;
      }
    };
  }, [onCaptchaChangeSignup]);

  return {
    formData,
    errors,
    isSubmitting,
    captchaVerified,
    handleInputChange,
    handleSubmit,
    validateForm
  };
};
