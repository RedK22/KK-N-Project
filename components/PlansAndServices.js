import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PlansAndServices({plans}) {
  return (
    <section className="bg-gray-100 border-green-600 border-2 py-16 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Plans & Services
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Choose the perfect nutrition plan to support your health goals
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${
                plan.featured ? "border-green-500 border-2" : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
