class GenyCloudDeviceRegistry {
  constructor(deviceRegistry) {
    this.deviceRegistry = deviceRegistry;
  }

  async allocateDevice(getInstanceFn) {
    let instance;
    await this.deviceRegistry.allocateDevice(async () => {
      instance = await getInstanceFn();
      return instance.uuid;
    });
    return instance;
  }

  async disposeDevice(instance) {
    return this.deviceRegistry.disposeDevice(instance.uuid);
  }

  async includes(instance) {
    return this.deviceRegistry.includes(instance.uuid);
  }

  async getRegisteredInstanceUUIDs() {
    return this.deviceRegistry.getRegisteredDevices();
  }
}

module.exports = GenyCloudDeviceRegistry;
