
import { useParams } from 'react-router-dom';
import Data from '../DATA/data.json';
import './component.css'


const ProductSpecifications = () => {
  const { id } = useParams();
  const item = Data.find(product => product.id.toString() === id);

  if (!item) return <p>Product not found.</p>;

  return (
    <div className="tableC p-4">
      <table className="table-auto border-separate border-spacing-x-6 border-spacing-y-2 w-full">
        {/* General */}
        <thead>
          <tr>
            <th colSpan={3} className="gradient-header">General</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>RMS Power (CTA-2006)</td><td>{item.CTAPower}</td></tr>
          <tr><td>RMS Power (Manufacturer)</td><td>{item.ManufacturerPower}</td></tr>
        </tbody>

        {/* Expandability */}
        <thead>
          <tr><th colSpan={3} className="gradient-header">Expandability</th></tr>
        </thead>
        <tbody>
          <tr><td>AUX Input</td><td>{item.AUXInput}</td></tr>
          <tr><td>Audio/video Input</td><td>{item.AVInput}</td></tr>
          <tr><td>USB Input</td><td>{item.USBInput}</td></tr>
          <tr><td>USB Port Power</td><td>{item.USBPower}</td></tr>
          <tr><td>Backup Camera Input</td><td>{item.BackupCamera}</td></tr>
          <tr><td>Second Camera Input</td><td>{item.SecondCamera}</td></tr>
          <tr><td>Camera Input (Marine)</td><td>{item.MarineCamera}</td></tr>
          <tr><td>Preamp Outputs</td><td>{item.PreampOutputs}</td></tr>
          <tr><td>Sub Preamp Outputs</td><td>{item.SubPreamp}</td></tr>
          <tr><td>Switchable Rear Preamp Outputs</td><td>{item.SwitchableRear}</td></tr>
          <tr><td>Memory Card Slot</td><td>{item.MemoryCard}</td></tr>
        </tbody>

        {/* Smartphone Control */}
        <thead>
          <tr><th colSpan={3} className="gradient-header">Smartphone Control</th></tr>
        </thead>
        <tbody>
          <tr><td>iPhone Compatibility</td><td>{item.iPhone}</td></tr>
          <tr><td>CarPlay</td><td>{item.CarPlay}</td></tr>
          <tr><td>Siri Control</td><td>{item.Siri}</td></tr>
          <tr><td>Android Control</td><td>{item.Android}</td></tr>
          <tr><td>Android Auto</td><td>{item.AndroidAuto}</td></tr>
          <tr><td>Alexa Voice Control</td><td>{item.Alexa}</td></tr>
        </tbody>

        {/* Tuner */}
        <thead>
          <tr><th colSpan={3} className="gradient-header">Tuner</th></tr>
        </thead>
        <tbody>
          <tr><td>FM Sensitivity</td><td>{item.FMSensitivity}</td></tr>
          <tr><td>European Tuning</td><td>{item.EuroTuning}</td></tr>
          <tr><td>Seek/Scan</td><td>{item.SeekScan}</td></tr>
          <tr><td>Radio Data System</td><td>{item.RDS}</td></tr>
        </tbody>

        {/* File Playback */}
        <thead>
          <tr><th colSpan={3} className="gradient-header">File Playback</th></tr>
        </thead>
        <tbody>
          <tr><td>Music File Playback</td><td>{item.MusicFormats}</td></tr>
          <tr><td>High-res Playback</td><td>{item.HiRes}</td></tr>
        </tbody>

        {/* Navigation Control */}
        <thead>
          <tr><th colSpan={3} className="gradient-header">Navigation Control</th></tr>
        </thead>
        <tbody>
          <tr><td>Navigation</td><td>{item.Navigation}</td></tr>
          <tr><td>Navigation App Compatible (iOS)</td><td>{item.NavAppIOS}</td></tr>
          <tr><td>Navigation App Compatible (Android)</td><td>{item.NavAppAndroid}</td></tr>
        </tbody>

        {/* Features & Specs */}
        <thead>
          <tr><th colSpan={3} className="gradient-header">Features & Specs</th></tr>
        </thead>
        <tbody>
          <tr><td>Bluetooth Compatible</td><td>{item.Bluetooth}</td></tr>
          <tr><td>Bluetooth Version</td><td>{item.BluetoothVersion}</td></tr>
          <tr><td>Satellite Radio Ready</td><td>{item.SatRadio}</td></tr>
          <tr><td>HD Radio</td><td>{item.HDRadio}</td></tr>
          <tr><td>Video Screen</td><td>{item.VideoScreen}</td></tr>
          <tr><td>Preamp Voltage</td><td>{item.PreampVoltage}</td></tr>
          <tr><td>Screen Size</td><td>{item.ScreenSize}</td></tr>
          <tr><td>Screen Type</td><td>{item.ScreenType}</td></tr>
          <tr><td>Display Color</td><td>{item.DisplayColor}</td></tr>
          <tr><td>Key Button Color</td><td>{item.ButtonColor}</td></tr>
          <tr><td>EQ Bands</td><td>{item.EQBands}</td></tr>
          <tr><td>Wireless Remote</td><td>{item.Remote}</td></tr>
          <tr><td>Steering Wheel Control Compatible</td><td>{item.SWCCompatible}</td></tr>
          <tr><td>Parts Warranty</td><td>{item.WarrantyParts}</td></tr>
          <tr><td>Labor Warranty</td><td>{item.WarrantyLabor}</td></tr>
        </tbody>

        {/* Dimensions */}
        <thead>
          <tr><th colSpan={3} className="gradient-header">Dimensions</th></tr>
        </thead>
        <tbody>
          <tr><td>Chassis Depth</td><td>{item.ChassisDepth}</td></tr>
          <tr><td>Chassis Width</td><td>{item.ChassisWidth}</td></tr>
          <tr><td>Chassis Height</td><td>{item.ChassisHeight}</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductSpecifications;