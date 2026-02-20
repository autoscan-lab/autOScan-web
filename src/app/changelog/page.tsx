import { ChangelogTimeline } from "@/components/changelog-timeline";
import { getChangelogEntries } from "@/lib/changelog";

export default async function ChangelogPage() {
  const releases = await getChangelogEntries();

  return <ChangelogTimeline releases={releases} />;
}
