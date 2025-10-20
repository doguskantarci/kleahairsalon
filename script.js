function openBooking(){
  document.getElementById('bookingModal').classList.add('active');
}

function closeBooking(){
  document.getElementById('bookingModal').classList.remove('active');
  document.getElementById('bookingMsg').textContent='';
  document.getElementById('bookingForm').reset();
}

function submitBooking(e){
  e.preventDefault();
  const name=document.getElementById('bName').value;
  const phone=document.getElementById('bPhone').value;
  const service=document.getElementById('bService').value;
  const date=document.getElementById('bDate').value;
  const note=document.getElementById('bNote').value;
  const message=`Hello, I am ${name}.%0A%0AI would like to book a professional hair service at Klea Hair Salon.%0A%0AService: ${service}%0ADate: ${date}%0APhone: ${phone}%0ANotes: ${note}%0A%0AThank you 🌷`;
  const whatsappNumber='38649215334';
  const url=`https://wa.me/${whatsappNumber}?text=${message}`;
  document.getElementById('bookingMsg').textContent='Redirecting to WhatsApp…';
  setTimeout(()=>{
    window.open(url,'_blank');
    closeBooking();
  },3000);
}
