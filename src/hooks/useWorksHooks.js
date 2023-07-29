import { useRecoilState } from "recoil";

export const useWorksHooks = () => {
  const [page, setPage] = useRecoilState(pageAtom);

  const works = [
    {
      title: "Portfolio",
      image: portfolioImage,
      text: `以前のポートフォリオを、Material-UIを用いてリニューアル。\nこちらのサイトでは、私の技術や作品をご紹介しています。\nまた主に利用しているライブラリはReact, Material-UI, Recoil等です。`,
      url: "https://portfolio-r216-yu.vercel.app/",
    },
    {
      title: "Team-Balancer",
      image: teamBalancerImage,
      text: `趣味のゲームに関するwebアプリです。\n複数人のプレイヤーを、二つのチームに分けることができます。\nその際、完全ランダムな分け方と、ゲームの実力を考慮した分け方の両者が可能となっています。\nライブラリはReact、TailwindCSS、状態管理はReduxを利用。`,
      url: "https://team-balancer.vercel.app/",
    },
  ];
  return { page, setPage, works };
};
