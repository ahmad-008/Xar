import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function HomePage () {
  return(
    <Container className="py-20" >
      <div className="flex flex-wrap gap-3" >
        <Button>Primary</Button>
        <Button variant="secondary" >Secondary</Button>
        <Button variant="outline" >Outline</Button>
        <Button variant="danger" size="sm"  >Delete</Button>
        <Button variant="success" size="sm" >Success</Button>
        <Button size="lg" disabled >Disabled</Button>
      </div>


    </Container>


  );
}