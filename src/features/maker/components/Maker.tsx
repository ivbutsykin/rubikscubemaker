import { Card } from "@radix-ui/themes";

function Maker() {
  return (
    <Card>
      <iframe
        src="https://cube.rider.biz/visualcube.php?fmt=svg&size=150&pzl=2&alg=R2F2R2"
        width={192}
        height={192}
      />
    </Card>
  );
}

export default Maker;
