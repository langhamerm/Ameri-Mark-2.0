import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Artist {
  readonly id: string;
  readonly realName?: string;
  readonly stageName?: string[];
  readonly songs?: string[];
  readonly genre?: string;
  readonly events?: string[];
  constructor(init: ModelInit<Artist>);
  static copyOf(source: Artist, mutator: (draft: MutableModel<Artist>) => MutableModel<Artist> | void): Artist;
}