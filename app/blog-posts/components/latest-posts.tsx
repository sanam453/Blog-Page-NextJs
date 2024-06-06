import * as React from "react";

// @components
import Image from "next/image";
import { Typography, Card, CardBody, Chip } from "@material-tailwind/react";

// @context
import { useCart } from "@/context/cart-context";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export async function LatestPosts({
  product,
}: {
  product: any
}) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select()
    .gte("like", 5000);

  console.log(data);

  if (error) {
    return <div>Error</div>;
  }
  

  return (
    <div>
      <Card className="max-w-xs shadow-none mt-4">
        <div>
          <Image
            height={512}
            width={512}
            className="object-cover max-h-32 w-full h-full"
            src={data?.image}
            alt="profile-picture"
          />
        </div>
        <CardBody>
          <Chip
            variant="ghost"
            className="px-2 text-primary text-xs font-medium"
          >
            {data?.category}
          </Chip>
          <Typography type="p" className="font-semibold mt-1">
            {data?.name}
          </Typography>
          <Typography type="small" className="my-1 text-foreground">
            {data?.desc}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default LatestPosts;
