import { render, screen } from '@testing-library/react';
import MyAccount from './MyAccount';

test('renders My Account form fields', async () => {
  // إجراء التصيير (render) للمكون MyAccount
  render(<MyAccount />);

  // استخدم findByLabelText بدلاً من getByLabelText للتأكد من العثور على الحقول بشكل غير متزامن
  const nameField = await screen.findByLabelText(/Name/i);
  const emailField = await screen.findByLabelText(/Email/i);

  // تحقق من وجود الحقول
  expect(nameField).toBeInTheDocument();
  expect(emailField).toBeInTheDocument();

  // إضافة المزيد من التحقق - مثلاً للتأكد من أن الحقول فارغة في البداية
  expect(nameField).toHaveValue('');
  expect(emailField).toHaveValue('');

  // إظهار DOM الحالي للمساعدة في التشخيص إذا لزم الأمر
  screen.debug();
});
