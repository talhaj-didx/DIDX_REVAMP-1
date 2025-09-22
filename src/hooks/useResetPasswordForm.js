import { useState, useEffect } from 'react';

export const useResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    UID: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.UID.trim()) {
      newErrors.UID = "UID is required";
    }
    
    if (!captchaVerified) {
      newErrors.captcha = "Please complete the captcha verification";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      
      // Redirect to the actual reset password endpoint
      window.location.href = `https://admin.didx.net/password/ForgetPassword.php`;
    } catch (error) {
      console.error("Reset password error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Captcha callback function
  const onCaptchaChangeReset = (response) => {
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
    window.onCaptchaChangeReset = onCaptchaChangeReset;
    
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
      if (window.onCaptchaChangeReset) {
        delete window.onCaptchaChangeReset;
      }
    };
  }, [onCaptchaChangeReset]);

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
