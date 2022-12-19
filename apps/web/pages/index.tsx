import { FixedScrollPanel } from "@mineshang/ec_china-package-monorepo";

export default function Web() {
  return (
    <FixedScrollPanel headerHeight={0} windowWidth={0}>
      <div>
        <div></div>
        <div id='fixedColumn'>
          Fixed Column
        </div>
      </div>
    </FixedScrollPanel>
  );
}
