import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Accordion1() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Eros erat consequat nunc dapibus suspendisse lacinia?
        </AccordionTrigger>
        <AccordionContent>
          Curabitur lacus ante ultrices odio tristique himenaeos proin netus
          volutpat molestie fames.Montes gravida hendrerit nascetur angue
          efficitur.Fringilla ac acgue montes nullam venenatis conubia faucibus
          suscipit orci platea.Vel maecenas auctor nunc posuere mus felis
          dignissim velit.Mus dis feugiat sollicitudin diam vulputate velit
          adipiscing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Accumsan iaculis pede pharetra phasellus pretium congue?
        </AccordionTrigger>
        <AccordionContent>
          Curabitur lacus ante ultrices odio tristique himenaeos proin netus
          volutpat molestie fames.Montes gravida hendrerit nascetur angue
          efficitur.Fringilla ac acgue montes nullam venenatis conubia faucibus
          suscipit orci platea.Vel maecenas auctor nunc posuere mus felis
          dignissim velit.Mus dis feugiat sollicitudin diam vulputate velit
          adipiscing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Luctus primis pede vehicula egestas?
        </AccordionTrigger>
        <AccordionContent>
          Curabitur lacus ante ultrices odio tristique himenaeos proin netus
          volutpat molestie fames.Montes gravida hendrerit nascetur angue
          efficitur.Fringilla ac acgue montes nullam venenatis conubia faucibus
          suscipit orci platea.Vel maecenas auctor nunc posuere mus felis
          dignissim velit.Mus dis feugiat sollicitudin diam vulputate velit
          adipiscing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Condimentum pellentesque nam libero class
        </AccordionTrigger>
        <AccordionContent>
          Curabitur lacus ante ultrices odio tristique himenaeos proin netus
          volutpat molestie fames.Montes gravida hendrerit nascetur angue
          efficitur.Fringilla ac acgue montes nullam venenatis conubia faucibus
          suscipit orci platea.Vel maecenas auctor nunc posuere mus felis
          dignissim velit.Mus dis feugiat sollicitudin diam vulputate velit
          adipiscing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Arcu vivamus sapien lorem suspendisse
        </AccordionTrigger>
        <AccordionContent>
          Curabitur lacus ante ultrices odio tristique himenaeos proin netus
          volutpat molestie fames.Montes gravida hendrerit nascetur angue
          efficitur.Fringilla ac acgue montes nullam venenatis conubia faucibus
          suscipit orci platea.Vel maecenas auctor nunc posuere mus felis
          dignissim velit.Mus dis feugiat sollicitudin diam vulputate velit
          adipiscing.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
