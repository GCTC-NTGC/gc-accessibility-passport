import useSWR from "swr";
import { Barrier } from "../pages/api/barrier";

export default function useBarriers(): {
  barriers?: Barrier[];
} {
  const { data: barriers } = useSWR<Barrier[]>("/api/barrier");
  return { barriers };
}
