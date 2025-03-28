// JSON에서 주어진 university 객체를 그대로 매핑
export const UNIVERSITY_MAP: Record<string, string> = {
  sejong: "세종대학교",
  konkuk: "건국대학교",
  seoulnational: "서울대학교",
  yonsei: "연세대학교",
  korea: "고려대학교",
  sogang: "서강대학교",
  hanyang: "한양대학교",
  chungang: "중앙대학교",
  kookmin: "국민대학교",
  sungkyunkwan: "성균관대학교",
  hankukufs: "한국외국어대학교",
  catholic: "가톨릭대학교",
  ewha: "이화여자대학교",
  seoulcity: "서울시립대학교",
  seoultech: "서울과학기술대학교",
  dongguk: "동국대학교",
  hongik: "홍익대학교",
  karts: "한국항공대학교",
  kyunghee: "경희대학교",
  sookmyung: "숙명여자대학교",
};

// 혹은 필요한 경우 함수로 감싸서 안전하게 사용 가능
export function getUniversityName(key: string): string {
  console.log(UNIVERSITY_MAP[key]);
  return UNIVERSITY_MAP[key] ?? key;
}
