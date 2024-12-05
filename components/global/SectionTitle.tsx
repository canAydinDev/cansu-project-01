import { Separator } from "@/components/ui/separator";

type Props = {
  text?: string;
};

function SectionTitle({ text = "" }: Props) {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-20">
        {text}
      </h2>
      <Separator />
    </div>
  );
}
export default SectionTitle;
