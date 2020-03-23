import ArcGisFeatureServerCatalogItem from "./ArcGisFeatureServerCatalogItem";
import ArcGisMapServerCatalogItem from "./ArcGisMapServerCatalogItem";
import GeoJsonCatalogItem from "./GeoJsonCatalogItem";
import CsvCatalogItem from "./CsvCatalogItem";
import KmlCatalogItem from "./KmlCatalogItem";
import WebMapServiceCatalogItem from "./WebMapServiceCatalogItem";

export enum SupportedTypes {
  ArcGisFeatureServerCatalogItem,
  ArcGisMapServerCatalogItem,
  GeoJsonCatalogItem,
  CsvCatalogItem,
  KmlCatalogItem,
  WebMapServiceCatalogItem
}

export interface CkanResource {
  description: string;
  name: string;
  format: string;
  url: string;
  license_id: string;
  id: string;
}

export interface CkanOrganisation {
  name: string;
  title: string;
  description: string;
  id: string;
}

export interface CkanDatasetGroup {
  title: string;
  display_name: string;
  id: string;
  description: string;
}

export interface CkanDataset {
  id: string;
  name: string;
  title: string;
  url: string;
  organization: CkanOrganisation | null;
  geo_coverage?: string;
  metadata_created: string;
  metadata_modified: string;
  update_freq: string;
  notes: string;
  license_title: string;
  license_url: string;
  author: string;
  contact_point: string;
  groups: CkanDatasetGroup[];
  resources: CkanResource[];
}

export interface CkanSearchResult {
  count: number;
  results: CkanDataset[];
}

export interface CkanServerResponse {
  help: string;
  result: CkanSearchResult;
}
