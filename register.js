document.addEventListener('DOMContentLoaded', () => {
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    
    genderRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                genderRadios.forEach(otherRadio => {
                    if (otherRadio !== radio) {
                        otherRadio.disabled = true;
                    }
                });
            }
        });
    });

    const form = document.getElementById('registerForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        let isValid = true;
        
       
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        
       
        const fullName = document.getElementById('fullName').value;
        if (!/^[a-zA-Z\s]+$/.test(fullName)) {
            document.getElementById('fullNameError').textContent = 'Nama lengkap hanya boleh mengandung huruf dan spasi.';
            console.log('Nama lengkap hanya boleh mengandung huruf dan spasi.')
            isValid = false;
        }

     
        const username = document.getElementById('username').value;
        if (!/^[a-zA-Z0-9_]{3,15}$/.test(username)) {
            document.getElementById('usernameError').textContent = 'Username harus terdiri dari 3-15 karakter dan hanya boleh mengandung huruf, angka, dan underscore.';
            isValid = false;
        }

       
        const email = document.getElementById('email').value;
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            document.getElementById('emailError').textContent = 'Email tidak valid.';
            isValid = false;
        }

       
        const phone = document.getElementById('phone').value;
        if (!/^\d{10,15}$/.test(phone)) {
            document.getElementById('phoneError').textContent = 'Nomor telepon harus terdiri dari 10-15 digit.';
            isValid = false;
        }

        const password = document.getElementById('password').value;
        if (!/^.{6,}$/.test(password)) {
            document.getElementById('passwordError').textContent = 'Password harus terdiri dari minimal 6 karakter.';
            isValid = false;
        }

        
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (confirmPassword !== password) {
            document.getElementById('confirmPasswordError').textContent = 'Konfirmasi password tidak cocok dengan password.';
            isValid = false;
        }

        if (isValid) {
            
            console.log('Form submitted successfully!');
        }
    });
});