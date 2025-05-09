import React, { useState } from 'react';

function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark-mode', newMode);
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="btn btn-primary position-fixed top-0 end-0  mr-5 mt-5"
      style={{ backgroundColor: '#205760' }}
    >
      {darkMode ? (
        <i className="bi bi-sun"></i> // أيقونة الشمس عند التبديل إلى الوضع المظلم
      ) : (
        <i className="bi bi-moon"></i> // أيقونة القمر عند التبديل إلى الوضع الفاتح
      )}
    </button>
  );
}

export default ToggleTheme;
