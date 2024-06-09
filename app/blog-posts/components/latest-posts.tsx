import * as React from "react";

// @components
import Image from "next/image";
import { Typography, Card, CardBody, Chip } from "@material-tailwind/react";

// @context
import { useCart } from "@/context/cart-context";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export async function LatestPosts() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select()
    .gte("like", 5000);

  if (error) {
    return <div>Error</div>;
  }

  return data.map((product, key) => (
    <Card key={key} className="max-w-xs shadow-none mt-4">
      <div>
        <Image
          height={512}
          width={512}
          className="object-cover max-h-32 w-full h-full"
          src={product?.image}
          alt="profile-picture"
        />
      </div>
      <CardBody>
        <Chip variant="ghost" className="px-2 text-primary text-xs font-medium">
          {product?.category}
        </Chip>
        <Typography type="p" className="font-semibold mt-1">
          {product?.name}
        </Typography>
        <Typography type="small" className="my-1 text-foreground">
          {product?.desc}
        </Typography>
      </CardBody>
    </Card>
  ));
}

export default LatestPosts;
