import NotFoundPage from "../components/NotFoundPage";
import { notFoundMetadata } from "../lib/metadata";

export function meta() {
  return notFoundMetadata();
}

export default function NotFound() {
  return <NotFoundPage />;
}
