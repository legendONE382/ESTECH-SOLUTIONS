const fmt = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 });
const ids = ['employees', 'hours', 'rate', 'reduction'];
function updateRoi() {
  const employees = Number(document.getElementById('employees')?.value || 0);
  const hours = Number(document.getElementById('hours')?.value || 0);
  const rate = Number(document.getElementById('rate')?.value || 0);
  const reduction = Number(document.getElementById('reduction')?.value || 0) / 100;
  const monthlyHours = employees * hours * 4;
  const savedHours = monthlyHours * reduction;
  const savedCost = savedHours * rate;
  document.getElementById('monthlyHours').textContent = Math.round(monthlyHours).toLocaleString();
  document.getElementById('savedHours').textContent = Math.round(savedHours).toLocaleString();
  document.getElementById('savedCost').textContent = fmt.format(savedCost);
}
ids.forEach((id) => document.getElementById(id)?.addEventListener('input', updateRoi));
updateRoi();
