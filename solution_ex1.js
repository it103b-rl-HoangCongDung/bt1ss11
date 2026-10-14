const findDeviceById = (devices, targetId) => {
  return devices.find(d => d.id === targetId) || null;
};

const updateDevice = (devices, targetId, updatedData) => {
  const targetDevice = findDeviceById(devices, targetId);
  if (targetDevice === null) return false;

  // Kiểm tra tồn tại tên thiết bị
  if (updatedData.name !== undefined) {
    targetDevice.name = updatedData.name;
  }

  // Khắc phục lỗi Falsy cho trạng thái bật/tắt (nhận cả false)
  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive;
  }

  // Khắc phục lỗi Falsy cho công suất (nhận cả số 0)
  if (updatedData.powerWatts !== undefined) {
    targetDevice.powerWatts = updatedData.powerWatts;
  }

  return true;
};

module.exports = { findDeviceById, updateDevice };