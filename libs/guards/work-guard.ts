import matter from 'gray-matter';

export class WorkGuard {
  static hasData(
    matterRes: matter.GrayMatterFile<string>
  ): boolean {
    return 'data' in matterRes;
  }

  static hasTitle(
    matterRes: matter.GrayMatterFile<string>
  ): boolean {
    return (
      WorkGuard.hasData(matterRes) &&
      'title' in matterRes.data &&
      typeof matterRes.data.title === 'string'
    );
  }

  static hasDate(
    matterRes: matter.GrayMatterFile<string>
  ): boolean {
    return (
      WorkGuard.hasData(matterRes) &&
      'date' in matterRes.data &&
      typeof matterRes.data.date === 'string'
    );
  }

  static hasThumbnail(
    matterRes: matter.GrayMatterFile<string>
  ): boolean {
    return (
      WorkGuard.hasData(matterRes) &&
      'thumbnail' in matterRes.data &&
      typeof matterRes.data.thumbnail === 'string'
    );
  }

  static hasCategory(
    matterRes: matter.GrayMatterFile<string>
  ): boolean {
    return (
      WorkGuard.hasData(matterRes) &&
      'category' in matterRes.data &&
      typeof matterRes.data.category === 'string'
    );
  }

  static hasPdf(
    matterRes: matter.GrayMatterFile<string>
  ): boolean {
    return (
      WorkGuard.hasData(matterRes) &&
      'pdf' in matterRes.data &&
      typeof matterRes.data.pdf === 'string'
    );
  }

  static hasSubtitle(
    matterRes: matter.GrayMatterFile<string>
  ): boolean {
    return (
      WorkGuard.hasData(matterRes) &&
      'subtitle' in matterRes.data &&
      typeof matterRes.data.subtitle === 'string'
    );
  }

  static hasDemo(
    matterRes: matter.GrayMatterFile<string>
  ): boolean {
    return (
      WorkGuard.hasData(matterRes) &&
      'demo' in matterRes.data &&
      typeof matterRes.data.demo === 'string'
    );
  }

  static hasGithub(
    matterRes: matter.GrayMatterFile<string>
  ): boolean {
    return (
      WorkGuard.hasData(matterRes) &&
      'github' in matterRes.data &&
      typeof matterRes.data.github === 'string'
    );
  }
}
