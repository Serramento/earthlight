import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold">Address</h3>
          <p className="text-gray-600">1234 Travel Lane</p>
          <p className="text-gray-600">Adventure City, AC 12345</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-600">(555) 123-4567</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-600">info@earthlight.travel</p>
        </div>
      </div>
    </div>
  );
}