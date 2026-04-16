import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/Card";
import { Mail, Phone, Send } from "lucide-react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
const Contact = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Our team is here to help you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p>Email</p>
                      <a
                        href=""
                        className="text-sm text-gray-600 hover:text-blue-600"
                      >
                        support@techshop.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p>Phone</p>
                      <a
                        href=""
                        className="text-sm text-gray-600 hover:text-blue-600"
                      >
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p>Address</p>
                      <a
                        href=""
                        className="text-sm text-gray-600 hover:text-blue-600"
                      >
                        123 Tech Street <br />
                        Innovation Districtbr <br />
                        San Juan Hagonoy Bulacan
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p>Business Hours</p>
                      <a
                        href=""
                        className="text-sm text-gray-600 hover:text-blue-600"
                      >
                        Monday- Friday: 9:00 AM - 6:00 PM <br />
                        Saturday: 10:00 AM - 4:00 PM <br />
                        Sunday: Closed
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Customer Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-800 mb-4">
                  Need immediate assistance? Our customer support team is
                  available during business hours to help with orders, returns,
                  and technical questions.
                </p>
                <Button className="w-full" variant="primary" size="md">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label>Name *</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label>Email *</label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label>Subject *</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label>Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry"
                      className="border rounded-lg w-full mt-1 p-4"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    variant="secondary"
                    size="md"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    What are your shipping options?
                  </h4>
                  <p className="text-sm text-gray-600">
                    We offer standard shipping (5-7 business days) and express
                    shipping (2-3 business days). Free shipping is available on
                    orders over ₱2,000.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    What is your return policy?
                  </h4>
                  <p className="text-sm text-gray-600">
                    We accept returns within 30 days of purchase. Items must be
                    unused and in original packaging. Please contact our support
                    team to initiate a return.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Do you provide warranty on products?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Yes, all products come with manufacturer warranty. Warranty
                    period varies by product. Check product details or contact
                    us for specific warranty information.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    How can I track my order?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Once your order ships, you'll receive a tracking number via
                    email. You can also view your order status in the "My
                    Orders" section of your account.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
