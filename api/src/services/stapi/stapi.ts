import querystring from 'querystring'

import axios from 'axios'

// Search Input Types
type V1RestAnimalSearchInput = {
  avian: boolean
  canine: boolean
  earthAnimal: boolean
  earthInsect: boolean
  feline: boolean
  name: string
}

type V1RestAstronomicalObjectSearchInput = {
  name: string
  locationUid: string
  astronomicalObjectType: string
}

type V1RestBookCollectionSearchInput = {
  numberOfPagesFrom: number
  numberOfPagesTo: number
  publishedYearFrom: number
  publishedYearTo: number
  stardateFrom: number
  stardateTo: number
  title: string
  yearFrom: number
  yearTo: number
}

type V1RestBookSearchInput = {
  anthology: boolean
  audiobook: boolean
  audiobookAbridged: boolean
  audiobookPublishedYearFrom: number
  audiobookPublishedYearTo: number
  audiobookRunTimeFrom: number
  audiobookRunTimeTo: number
  biographyBook: boolean
  eBook: boolean
  novel: boolean
  novelization: boolean
  numberOfPagesFrom: number
  numberOfPagesTo: number
  publishedYearFrom: number
  publishedYearTo: number
  referenceBook: boolean
  rolePlayingBook: boolean
  stardateFrom: number
  stardateTo: number
  title: string
  yearFrom: number
  yearTo: number
}

type V1RestCharacterSearchInput = {
  alternateReality: boolean
  deceased: boolean
  fictionalCharacter: boolean
  gender: string
  hologram: boolean
  mirror: boolean
  name: string
}

type V1RestComicCollectionSearchInput = {
  numberOfPagesFrom: number
  numberOfPagesTo: number
  photonovel: boolean
  publishedYearFrom: number
  publishedYearTo: number
  stardateFrom: number
  stardateTo: number
  title: string
  yearFrom: number
  yearTo: number
}

type V1RestComicSeriesSearchInput = {
  miniseries: boolean
  numberOfIssuesFrom: number
  numberOfIssuesTo: number
  photonovelSeries: boolean
  publishedYearFrom: number
  publishedYearTo: number
  stardateFrom: number
  stardateTo: number
  title: string
  yearFrom: number
  yearTo: number
}

type V1RestComicStripSearchInput = {
  numberOfPagesFrom: number
  numberOfPagesTo: number
  publishedYearFrom: number
  publishedYearTo: number
  title: string
  yearFrom: number
  yearTo: number
}

type V1RestComicsSearchInput = {
  adaptation: boolean
  numberOfPagesFrom: number
  numberOfPagesTo: number
  photonovel: boolean
  publishedYearFrom: number
  publishedYearTo: number
  stardateFrom: number
  stardateTo: number
  title: string
  yearFrom: number
  yearTo: number
}

type V1RestCompanySearchInput = {
  broadcaster: boolean
  collectibleCompany: boolean
  conglomerate: boolean
  digitalVisualEffectsCompany: boolean
  distributor: boolean
  filmEquipmentCompany: boolean
  gameCompany: boolean
  makeUpEffectsStudio: boolean
  mattePanumberingCompany: boolean
  modelAndMiniatureEffectsCompany: boolean
  name: string
  postProductionCompany: boolean
  productionCompany: boolean
  propCompany: boolean
  recordLabel: boolean
  specialEffectsCompany: boolean
  tvAndFilmProductionCompany: boolean
  videoGameCompany: boolean
}

type V1RestConflictSearchInput = {
  alternateReality: boolean
  dominionWarBattle: boolean
  earthConflict: boolean
  federationWar: boolean
  klingonWar: boolean
  name: string
  yearFrom: number
  yearTo: number
}

type V1RestElementSearchInput = {
  gammaSeries: boolean
  hypersonicSeries: boolean
  megaSeries: boolean
  name: string
  omegaSeries: boolean
  symbol: string
  transonicSeries: boolean
  transuranium: boolean
  worldSeries: boolean
}

type V1RestEpisodeSearchInput = {
  episodeNumberFrom: number
  episodeNumberTo: number
  featureLength: boolean
  finalScriptDateFrom: string
  finalScriptDateTo: string
  productionSerialNumber: string
  seasonNumberFrom: number
  seasonNumberTo: number
  stardateFrom: number
  stardateTo: number
  title: string
  usAirDateFrom: string
  usAirDateTo: string
  yearFrom: number
  yearTo: number
}

type V1RestFoodSearchInput = {
  alcoholicBeverage: boolean
  beverage: boolean
  dessert: boolean
  earthlyOrigin: boolean
  fruit: boolean
  herbOrSpice: boolean
  juice: boolean
  name: string
  sauce: boolean
  soup: boolean
  tea: boolean
}

type V1RestLiteratureSearchInput = {
  earthlyOrigin: boolean
  religiousLiterature: boolean
  report: boolean
  scientificLiterature: boolean
  shakespeareanWork: boolean
  technicalManual: boolean
  title: string
}

type V1RestLocationSearchInput = {
  alternateReality: boolean
  bajoranSettlement: boolean
  bodyOfWater: boolean
  buildingnumbererior: boolean
  colony: boolean
  country: boolean
  ds9Establishment: boolean
  earthlyLocation: boolean
  establishment: boolean
  fictionalLocation: boolean
  geographicalLocation: boolean
  landform: boolean
  landmark: boolean
  medicalEstablishment: boolean
  mirror: boolean
  name: string
  religiousLocation: boolean
  road: boolean
  school: boolean
  settlement: boolean
  shipyard: boolean
  structure: boolean
  subnationalEntity: boolean
  usSettlement: boolean
}

type V1RestMagazineSeriesSearchInput = {
  numberOfIssuesFrom: number
  numberOfIssuesTo: number
  publishedYearFrom: number
  publishedYearTo: number
  title: string
}

type V1RestMagazineSearchInput = {
  numberOfPagesFrom: number
  numberOfPagesTo: number
  publishedYearFrom: number
  publishedYearTo: number
  title: string
}

type V1RestMaterialSearchInput = {
  alloyOrComposite: boolean
  biochemicalCompound: boolean
  chemicalCompound: boolean
  drug: boolean
  explosive: boolean
  fuel: boolean
  gemstone: boolean
  mineral: boolean
  name: string
  poisonousSubstance: boolean
  preciousMaterial: boolean
}

type V1RestMedicalConditionSearchInput = {
  name: string
  psychologicalCondition: boolean
}

type V1RestMovieSearchInput = {
  stardateFrom: number
  stardateTo: number
  title: string
  usReleaseDateFrom: string
  usReleaseDateTo: string
  yearFrom: number
  yearTo: number
}

type V1RestOccupationSearchInput = {
  legalOccupation: boolean
  medicalOccupation: boolean
  name: string
  scientificOccupation: boolean
}

type V1RestOrganizationSearchInput = {
  alternateReality: boolean
  government: boolean
  governmentAgency: boolean
  numberergovernmentalOrganization: boolean
  lawEnforcementAgency: boolean
  medicalOrganization: boolean
  militaryOrganization: boolean
  militaryUnit: boolean
  mirror: boolean
  name: string
  prisonOrPenalColony: boolean
  researchOrganization: boolean
  sportOrganization: boolean
}

type V1RestPerformerSearchInput = {
  animalPerformer: boolean
  birthName: string
  dateOfBirthFrom: string
  dateOfBirthTo: string
  dateOfDeathFrom: string
  dateOfDeathTo: string
  disPerformer: boolean
  ds9Performer: boolean
  entPerformer: boolean
  filmPerformer: boolean
  gender: string
  name: string
  placeOfBirth: string
  placeOfDeath: string
  standInPerformer: boolean
  stuntPerformer: boolean
  tasPerformer: boolean
  tngPerformer: boolean
  tosPerformer: boolean
  videoGamePerformer: boolean
  voicePerformer: boolean
  voyPerformer: boolean
}

type V1RestSeasonSearchInput = {
  numberOfEpisodesFrom: number
  numberOfEpisodesTo: number
  seasonNumberFrom: number
  seasonNumberTo: number
  title: string
}

type V1RestSeriesSearchInput = {
  abbreviation: string
  originalRunEndDateFrom: string
  originalRunEndDateTo: string
  originalRunStartDateFrom: string
  originalRunStartDateTo: string
  productionEndYearFrom: number
  productionEndYearTo: number
  productionStartYearFrom: number
  productionStartYearTo: number
  title: string
}

type V1RestSoundtrackSearchInput = {
  lengthTo: number
  releaseDateFrom: string
  releaseDateTo: string
  title: string
}

type V1RestSpacecraftClassSearchInput = {
  alternateReality: boolean
  name: string
  warpCapableSpecies: boolean
}

type V1RestSpacecraftSearchInput = {
  name: string
}

type V1RestSpeciesSearchInput = {
  alternateReality: boolean
  extinctSpecies: boolean
  extraGalacticSpecies: boolean
  humanoidSpecies: boolean
  name: string
  nonCorporealSpecies: boolean
  reptilianSpecies: boolean
  shapeshiftingSpecies: boolean
  spaceborneSpecies: boolean
  telepathicSpecies: boolean
  transDimensionalSpecies: boolean
  unnamedSpecies: boolean
  warpCapableSpecies: boolean
}

type V1RestStaffSearchInput = {
  artDepartment: boolean
  artDirector: boolean
  assistantOrSecondUnitDirector: boolean
  audioAuthor: boolean
  author: boolean
  birthName: string
  calendarArtist: boolean
  cameraAndElectricalDepartment: boolean
  castingDepartment: boolean
  cbsDigitalStaff: boolean
  cinematographer: boolean
  comicArtist: boolean
  comicAuthor: boolean
  comicColorArtist: boolean
  comicInkArtist: boolean
  comicnumbereriorArtist: boolean
  comicLetterArtist: boolean
  comicPencilArtist: boolean
  comicStripArtist: boolean
  composer: boolean
  costumeDepartment: boolean
  costumeDesigner: boolean
  dateOfBirthFrom: string
  dateOfBirthTo: string
  dateOfDeathFrom: string
  dateOfDeathTo: string
  director: boolean
  exhibitAndAttractionStaff: boolean
  filmEditor: boolean
  gameArtist: boolean
  gameAuthor: boolean
  gender: string
  ilmProductionStaff: boolean
  linguist: boolean
  locationStaff: boolean
  makeupStaff: boolean
  musicDepartment: boolean
  name: string
  novelArtist: boolean
  novelAuthor: boolean
  personalAssistant: boolean
  placeOfBirth: string
  placeOfDeath: string
  producer: boolean
  productionAssociate: boolean
  productionDesigner: boolean
  productionStaff: boolean
  publicationArtist: boolean
  publicationDesigner: boolean
  publicationEditor: boolean
  publicationStaff: boolean
  publicityArtist: boolean
  referenceArtist: boolean
  referenceAuthor: boolean
  scienceConsultant: boolean
  soundDepartment: boolean
  specialAndVisualEffectsStaff: boolean
  specialFeaturesStaff: boolean
  storyEditor: boolean
  studioExecutive: boolean
  stuntDepartment: boolean
  transportationDepartment: boolean
  videoGameProductionStaff: boolean
  writer: boolean
}

type V1RestTechnologySearchInput = {
  borgComponent: boolean
  borgTechnology: boolean
  communicationsTechnology: boolean
  computerProgramming: boolean
  computerTechnology: boolean
  culinaryTool: boolean
  database: boolean
  energyTechnology: boolean
  engineeringTool: boolean
  fictionalTechnology: boolean
  holographicTechnology: boolean
  householdTool: boolean
  identificationTechnology: boolean
  lifeSupportTechnology: boolean
  medicalEquipment: boolean
  name: string
  sensorTechnology: boolean
  shieldTechnology: boolean
  subroutine: boolean
  tool: boolean
  transporterTechnology: boolean
}

type V1RestTitleSearchInput = {
  fleetRank: boolean
  militaryRank: boolean
  mirror: boolean
  name: string
  position: boolean
  religiousTitle: boolean
}

type V1RestTradingCardDeckSearchInput = {
  name: string
  tradingCardSetUid: string
}

type V1RestTradingCardSetSearchInput = {
  boxesPerCaseFrom: number
  boxesPerCaseTo: number
  cardWidthTo: number
  cardsPerPackFrom: number
  cardsPerPackTo: number
  name: string
  packsPerBoxFrom: number
  packsPerBoxTo: number
  productionRunFrom: number
  productionRunTo: number
  productionRunUnit: string
  releaseYearFrom: number
  releaseYearTo: number
}

type V1RestTradingCardSearchInput = {
  name: string
  tradingCardDeckUid: string
  tradingCardSetUid: string
}

type V1RestVideoGameSearchInput = {
  releaseDateFrom: string
  releaseDateTo: string
  title: string
}

type V1RestVideoReleaseSearchInput = {
  runTimeTo: number
  title: string
  yearFrom: number
  yearTo: number
}

type V1RestWeaponSearchInput = {
  alternateReality: boolean
  handHeldWeapon: boolean
  laserTechnology: boolean
  mirror: boolean
  name: string
  phaserTechnology: boolean
  photonicTechnology: boolean
  plasmaTechnology: boolean
}

type V2RestAstronomicalObjectSearchInput = {
  astronomicalObject
  type: string
  locationUid: string
  name: string
}

type V2RestBookSearchInput = {
  anthology: boolean
  audiobook: boolean
  audiobookRunTimeTo: number
  biographyBook: boolean
  eBook: boolean
  novel: boolean
  novelization: boolean
  numberOfPagesFrom: number
  numberOfPagesTo: number
  publishedYearFrom: number
  publishedYearTo: number
  referenceBook: boolean
  rolePlayingBook: boolean
  stardateFrom: number
  stardateTo: number
  title: string
  unauthorizedPublication: boolean
  yearFrom: number
  yearTo: number
}

type V2RestCompanySearchInput = {
  broadcaster: boolean
  collectibleCompany: boolean
  conglomerate: boolean
  digitalVisualEffectsCompany: boolean
  distributor: boolean
  filmEquipmentCompany: boolean
  gameCompany: boolean
  makeUpEffectsStudio: boolean
  mattePanumberingCompany: boolean
  modelAndMiniatureEffectsCompany: boolean
  name: string
  postProductionCompany: boolean
  productionCompany: boolean
  propCompany: boolean
  publicationArtStudio: boolean
  publisher: boolean
  recordLabel: boolean
  specialEffectsCompany: boolean
  streamingService: boolean
  tvAndFilmProductionCompany: boolean
  videoGameCompany: boolean
  visualEffectsCompany: boolean
}

type V2RestElementSearchInput = {
  gammaSeries: boolean
  hypersonicSeries: boolean
  megaSeries: boolean
  name: string
  omegaSeries: boolean
  symbol: string
  transonicSeries: boolean
  transuranic: boolean
  worldSeries: boolean
}

type V2RestLocationSearchInput = {
  alternateReality: boolean
  bajoranSettlement: boolean
  bodyOfWater: boolean
  buildingnumbererior: boolean
  colony: boolean
  country: boolean
  ds9Establishment: boolean
  earthlyLocation: boolean
  establishment: boolean
  fictionalLocation: boolean
  geographicalLocation: boolean
  landform: boolean
  medicalEstablishment: boolean
  mirror: boolean
  mythologicalLocation: boolean
  name: string
  qonosLocation: boolean
  religiousLocation: boolean
  residence: boolean
  restaurant: boolean
  road: boolean
  school: boolean
  settlement: boolean
  shipyard: boolean
  structure: boolean
  subnationalEntity: boolean
  usSettlement: boolean
}

type V2RestOccupationSearchInput = {
  artsOccupation: boolean
  communicationOccupation: boolean
  economicOccupation: boolean
  educationOccupation: boolean
  entertainmentOccupation: boolean
  illegalOccupation: boolean
  legalOccupation: boolean
  medicalOccupation: boolean
  name: string
  scientificOccupation: boolean
  sportsOccupation: boolean
  victualOccupation: boolean
}

type V2RestPerformerSearchInput = {
  animalPerformer: boolean
  audiobookPerformer: boolean
  birthName: string
  cutPerformer: boolean
  dateOfBirthFrom: string
  dateOfBirthTo: string
  dateOfDeathFrom: string
  dateOfDeathTo: string
  disPerformer: boolean
  ds9Performer: boolean
  entPerformer: boolean
  filmPerformer: boolean
  gender: string
  ldPerformer: boolean
  name: string
  picPerformer: boolean
  placeOfBirth: string
  placeOfDeath: string
  proPerformer: boolean
  puppeteer: boolean
  snwPerformer: boolean
  stPerformer: boolean
  standInPerformer: boolean
  stuntPerformer: boolean
  tasPerformer: boolean
  tngPerformer: boolean
  tosPerformer: boolean
  videoGamePerformer: boolean
  voicePerformer: boolean
  voyPerformer: boolean
}

type V2RestSpacecraftClassSearchInput = {
  alternateReality: boolean
  mirror: boolean
  name: string
  warpCapableSpecies: boolean
}

type V2RestSpacecraftSearchInput = {
  name: string
  registry: string
  status: string
}

type V2RestSpeciesSearchInput = {
  alternateReality: boolean
  avianSpecies: boolean
  extinctSpecies: boolean
  extraGalacticSpecies: boolean
  humanoidSpecies: boolean
  name: string
  nonCorporealSpecies: boolean
  reptilianSpecies: boolean
  shapeshiftingSpecies: boolean
  spaceborneSpecies: boolean
  telepathicSpecies: boolean
  transDimensionalSpecies: boolean
  unnamedSpecies: boolean
  warpCapableSpecies: boolean
}

type V2RestStaffSearchInput = {
  artDepartment: boolean
  artDirector: boolean
  assistantOrSecondUnitDirector: boolean
  audioAuthor: boolean
  author: boolean
  birthName: string
  calendarArtist: boolean
  cameraAndElectricalDepartment: boolean
  castingDepartment: boolean
  cbsDigitalStaff: boolean
  cinematographer: boolean
  comicArtist: boolean
  comicAuthor: boolean
  comicColorArtist: boolean
  comicCoverArtist: boolean
  comicInkArtist: boolean
  comicnumbereriorArtist: boolean
  comicLetterArtist: boolean
  comicPencilArtist: boolean
  comicStripArtist: boolean
  composer: boolean
  costumeDepartment: boolean
  costumeDesigner: boolean
  dateOfBirthFrom: string
  dateOfBirthTo: string
  dateOfDeathFrom: string
  dateOfDeathTo: string
  director: boolean
  exhibitAndAttractionStaff: boolean
  filmEditor: boolean
  filmationProductionStaff: boolean
  gameArtist: boolean
  gameAuthor: boolean
  gender: string
  ilmProductionStaff: boolean
  linguist: boolean
  locationStaff: boolean
  makeupStaff: boolean
  merchandiseStaff: boolean
  musicDepartment: boolean
  name: string
  novelArtist: boolean
  novelAuthor: boolean
  personalAssistant: boolean
  placeOfBirth: string
  placeOfDeath: string
  producer: boolean
  productionAssociate: boolean
  productionDesigner: boolean
  productionStaff: boolean
  publicationArtist: boolean
  publicationDesigner: boolean
  publicationEditor: boolean
  publicationStaff: boolean
  publicityArtist: boolean
  referenceArtist: boolean
  referenceAuthor: boolean
  scienceConsultant: boolean
  soundDepartment: boolean
  specialAndVisualEffectsStaff: boolean
  specialFeaturesStaff: boolean
  storyEditor: boolean
  studioExecutive: boolean
  stuntDepartment: boolean
  transportationDepartment: boolean
  videoGameProductionStaff: boolean
  writer: boolean
}

type V2RestTechnologySearchInput = {
  weaponComponent: boolean
}

type V2RestTitleSearchInput = {
  educationTitle: boolean
  fleetRank: boolean
  militaryRank: boolean
  mirror: boolean
  name: string
  religiousTitle: boolean
}

type VideoReleaseV2Base = {
  runTime: number
  specialFeatures: boolean
  title: string
  uid: string
  ultraVioletDigitalRelease: boolean
  vimeoDigitalRelease: boolean
  vuduDigitalRelease: boolean
  xboxSmartGlassDigitalRelease: boolean
  yearFrom: number
  yearTo: number
  youTubeDigitalRelease: boolean
}

type V2RestVideoReleaseSearchInput = {
  documentary: boolean
  runTimeTo: number
  specialFeatures: boolean
  title: string
  yearFrom: number
  yearTo: number
}

type V2RestWeaponSearchInput = {
  alternateReality: boolean
  directedEnergyWeapon: boolean
  explosiveWeapon: boolean
  fictionalWeapon: boolean
  handHeldWeapon: boolean
  laserTechnology: boolean
  mirror: boolean
  name: string
  phaserTechnology: boolean
  photonicTechnology: boolean
  plasmaTechnology: boolean
  projectileWeapon: boolean
}

type GetBaseResponseParams = {
  pageSize: number
  pageNumber: number
}

type GetFullResponseParams = {
  uid: string
}

type GetRequestParams = GetBaseResponseParams | GetFullResponseParams | object

type SearchInput =
  | V1RestAnimalSearchInput
  | V1RestAstronomicalObjectSearchInput
  | V1RestBookCollectionSearchInput
  | V1RestBookSearchInput
  | V1RestCharacterSearchInput
  | V1RestComicCollectionSearchInput
  | V1RestComicSeriesSearchInput
  | V1RestComicStripSearchInput
  | V1RestComicsSearchInput
  | V1RestCompanySearchInput
  | V1RestConflictSearchInput
  | V1RestElementSearchInput
  | V1RestEpisodeSearchInput
  | V1RestFoodSearchInput
  | V1RestLiteratureSearchInput
  | V1RestLocationSearchInput
  | V1RestMagazineSeriesSearchInput
  | V1RestMagazineSearchInput
  | V1RestMaterialSearchInput
  | V1RestMedicalConditionSearchInput
  | V1RestMovieSearchInput
  | V1RestOccupationSearchInput
  | V1RestOrganizationSearchInput
  | V1RestPerformerSearchInput
  | V1RestSeasonSearchInput
  | V1RestSeriesSearchInput
  | V1RestSoundtrackSearchInput
  | V1RestSpacecraftClassSearchInput
  | V1RestSpacecraftSearchInput
  | V1RestSpeciesSearchInput
  | V1RestStaffSearchInput
  | V1RestTechnologySearchInput
  | V1RestTitleSearchInput
  | V1RestTradingCardDeckSearchInput
  | V1RestTradingCardSetSearchInput
  | V1RestTradingCardSearchInput
  | V1RestVideoGameSearchInput
  | V1RestVideoReleaseSearchInput
  | V1RestWeaponSearchInput
  | V2RestAstronomicalObjectSearchInput
  | V2RestBookSearchInput
  | V2RestCompanySearchInput
  | V2RestElementSearchInput
  | V2RestLocationSearchInput
  | V2RestOccupationSearchInput
  | V2RestPerformerSearchInput
  | V2RestSpacecraftClassSearchInput
  | V2RestSpacecraftSearchInput
  | V2RestSpeciesSearchInput
  | V2RestStaffSearchInput
  | V2RestTechnologySearchInput
  | V2RestTitleSearchInput
  | VideoReleaseV2Base
  | V2RestVideoReleaseSearchInput
  | V2RestWeaponSearchInput

const VERSIONS = {
  V1: 'v1',
  V2: 'v2',
  V3: 'v3',
} as const

const RESOURCES = {
  Animal: 'animal',
  AnimalSearch: 'animal/search',
  AstronomicalObject: 'astronomicalObject',
  AstronomicalObjectSearch: 'astronomicalObject/search',
  Book: 'book',
  BookSearch: 'book/search',
  BookCollection: 'bookCollection',
  BookCollectionSearch: 'bookCollection/search',
  BookSeries: 'bookSeries',
  BookSeriesSearch: 'bookSeries/search',
  Character: 'character',
  CharacterSearch: 'character/search',
  ComicCollection: 'comicCollection',
  ComicCollectionSearch: 'comicCollection/search',
  ComicSeries: 'comicSeries',
  ComicSeriesSearch: 'comicSeries/search',
  ComicStrip: 'comicStrip',
  ComicStripSearch: 'comicStrip/search',
  Comics: 'comics',
  ComicsSearch: 'comics/search',
  Company: 'company',
  CompanySearch: 'company/search',
  Conflict: 'conflict',
  ConflictSearch: 'conflict/search',
  Element: 'element',
  ElementSearch: 'element/search',
  Episode: 'episode',
  EpisodeSearch: 'episode/search',
  Food: 'food',
  FoodSearch: 'food/search',
  Literature: 'literature',
  LiteratureSearch: 'literature/search',
  Location: 'location',
  LocationSearch: 'location/search',
  Magazine: 'magazine',
  MagazineSearch: 'magazine/search',
  MagazineSeries: 'magazineSeries',
  MagazineSeriesSearch: 'magazineSeries/search',
  Material: 'material',
  MaterialSearch: 'material/search',
  MedicalCondition: 'medicalCondition',
  MedicalConditionSearch: 'medicalCondition/search',
  Movie: 'movie',
  MovieSearch: 'movie/search',
  Occupation: 'occupation',
  OccupationSearch: 'occupation/search',
  Organization: 'organization',
  OrganizationSearch: 'organization/search',
  Performer: 'performer',
  PerformerSearch: 'performer/search',
  Season: 'season',
  SeasonSearch: 'season/search',
  Series: 'series',
  SeriesSearch: 'series/search',
  Soundtrack: 'soundtrack',
  SoundtrackSearch: 'soundtrack/search',
  Spacecraft: 'spacecraft',
  SpacecraftSearch: 'spacecraft/search',
  SpacecraftClass: 'spacecraftClass',
  SpacecraftClassSearch: 'spacecraftClass/search',
  Species: 'species',
  SpeciesSearch: 'species/search',
  Staff: 'staff',
  StaffSearch: 'staff/search',
  Technology: 'technology',
  TechnologySearch: 'technology/search',
  Title: 'title',
  TitleSearch: 'title/search',
  TradingCardDeck: 'tradingCardDeck',
  TradingCardDeckSearch: 'tradingCardDeck/search',
  TradingCard: 'tradingCard',
  TradingCardSearch: 'tradingCard/search',
  TradingCardSet: 'tradingCardSet',
  TradingCardSetSearch: 'tradingCardSet/search',
  VideoGame: 'videoGame',
  VideoGameSearch: 'videoGame/search',
  VideoRelease: 'videoRelease',
  VideoReleaseSearch: 'videoRelease/search',
  Weapon: 'weapon',
  WeaponSearch: 'weapon/search',
} as const

type Version = (typeof VERSIONS)[keyof typeof VERSIONS]
type Resource = (typeof RESOURCES)[keyof typeof RESOURCES]

type PostSearchParams = {
  pageSize: number
  pageNumber: number
  sort?: string
  search?: SearchInput
}
type PostParams = {
  pageSize: number
  pageNumber: number
  sort?: string
}

const stapi_url = (version: Version, resource: Resource) => {
  return `https://stapi.co/api/${version}/rest/${resource}`
}

const getSTAPI = async (url: string, params: GetRequestParams = {}) =>
  (await axios.get(url, { params })).data

const postSTAPI = async (
  url: string,
  params: PostParams,
  data: SearchInput
) => {
  return (await axios.post(url, querystring.stringify(data as any), { params }))
    .data
}

// GraphQl resolvers
export const animalBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.AnimalSearch), params)

export const animalFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Animal), params)

export const astronomicalObjectBaseResponse = async (
  params: GetBaseResponseParams
) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.AstronomicalObjectSearch), params)

export const astronomicalObjectFullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.AstronomicalObject), params)

export const astronomicalObjectV2BaseResponse = async (
  params: GetBaseResponseParams
) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.AstronomicalObjectSearch), params)

export const astronomicalObjectV2FullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.AstronomicalObject), params)

export const bookBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.BookSearch), params)

export const bookFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Book), params)

export const bookCollectionBaseResponse = async (
  params: GetBaseResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.BookCollectionSearch), params)

export const bookCollectionFullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.BookCollection), params)

export const bookSeriesBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.BookSeriesSearch), params)

export const bookSeriesFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.BookSeries), params)

export const bookV2BaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.BookSearch), params)

export const bookV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.Book), params)

export const characterBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.CharacterSearch), params)

export const characterFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Character), params)

export const comicCollectionBaseResponse = async (
  params: GetBaseResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ComicCollectionSearch), params)

export const comicCollectionFullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ComicCollection), params)

export const comicCollectionV2BaseResponse = async (
  params: GetBaseResponseParams
) => getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.ComicCollectionSearch), params)

export const comicCollectionV2FullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.ComicCollection), params)

export const comicSeriesBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ComicSeriesSearch), params)

export const comicSeriesFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ComicSeries), params)

export const comicStripBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ComicStripSearch), params)

export const comicStripFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ComicStrip), params)

export const comicsBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ComicsSearch), params)

export const comicsFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Comics), params)

export const companyBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.CompanySearch), params)

export const companyFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Company), params)

export const companyV2BaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.CompanySearch), params)

export const companyV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.Company), params)

export const conflictBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ConflictSearch), params)

export const conflictFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Conflict), params)

export const conflictV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.Conflict), params)

export const elementBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ElementSearch), params)

export const elementFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Element), params)

export const elementV2BaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.ElementSearch), params)

export const elementV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.Element), params)

export const episodeBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.EpisodeSearch), params)

export const episodeFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Episode), params)

export const foodBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.FoodSearch), params)

export const foodFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Food), params)

export const literatureBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.LiteratureSearch), params)

export const literatureFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Literature), params)

export const locationBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.LocationSearch), params)

export const locationFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Location), params)

export const locationV2BaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.LocationSearch), params)

export const locationV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.Location), params)

export const magazineBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.MagazineSearch), params)

export const magazineFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Magazine), params)

export const magazineSeriesBaseResponse = async (
  params: GetBaseResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.MagazineSeriesSearch), params)

export const magazineSeriesFullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.MagazineSeries), params)

export const materialBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.MaterialSearch), params)

export const materialFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Material), params)

export const medicalConditionBaseResponse = async (
  params: GetBaseResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.MedicalConditionSearch), params)

export const medicalConditionFullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.MedicalCondition), params)

export const movieBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.MovieSearch), params)

export const movieFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Movie), params)

export const occupationBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.OccupationSearch), params)

export const occupationFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Occupation), params)

export const occupationV2BaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.OccupationSearch), params)

export const occupationV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.Occupation), params)

export const organizationBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.OrganizationSearch), params)

export const organizationFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Organization), params)

export const performerBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.PerformerSearch), params)

export const performerFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Performer), params)

export const performerV2BaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.PerformerSearch), params)

export const performerV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.Performer), params)

export const seasonBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.SeasonSearch), params)

export const seasonFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Season), params)

export const seriesBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.SeriesSearch), params)

export const seriesFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Series), params)

export const soundtrackBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.SoundtrackSearch), params)

export const soundtrackFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Soundtrack), params)

export const spacecraftBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.SpacecraftSearch), params)

export const spacecraftFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Spacecraft), params)

export const spacecraftClassBaseResponse = async (
  params: GetBaseResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.SpacecraftClassSearch), params)

export const spacecraftClassFullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.SpacecraftClass), params)

export const spacecraftClassV2BaseResponse = async (
  params: GetBaseResponseParams
) => getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.SpacecraftClassSearch), params)

export const spacecraftClassV2FullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.SpacecraftClass), params)

export const spacecraftClassV3FullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V3, RESOURCES.SpacecraftClass), params)

export const spacecraftV2BaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.SpacecraftClassSearch), params)

export const spacecraftV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.SpacecraftClass), params)

export const speciesBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.SpeciesSearch), params)

export const speciesFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Species), params)

export const speciesV2BaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.SpeciesSearch), params)

export const speciesV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.Species), params)

export const staffBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.StaffSearch), params)

export const staffFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Staff), params)

export const staffV2BaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.StaffSearch), params)

export const staffV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.Staff), params)

export const technologyBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.TechnologySearch), params)

export const technologyFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Technology), params)

export const technologyV2BaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.TechnologySearch), params)

export const technologyV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.Technology), params)

export const titleBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.TitleSearch), params)

export const titleFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Title), params)

export const titleV2BaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.TitleSearch), params)

export const titleV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.Title), params)

export const tradingCardBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.TradingCardSearch), params)

export const tradingCardDeckBaseResponse = async (
  params: GetBaseResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.TradingCardDeckSearch), params)

export const tradingCardDeckFullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.TradingCardDeck), params)

export const tradingCardFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.TradingCard), params)

export const tradingCardSetBaseResponse = async (
  params: GetBaseResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.TradingCardSetSearch), params)

export const tradingCardSetFullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.TradingCardSet), params)

export const v2PageVideoReleases = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.VideoReleaseSearch), params)

export const videoGameBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.VideoGameSearch), params)

export const videoGameFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.VideoGame), params)

export const videoReleaseBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.VideoReleaseSearch), params)

export const videoReleaseFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.VideoRelease), params)

export const videoReleaseV2FullResponse = async (
  params: GetFullResponseParams
) => getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.VideoRelease), params)

export const weaponBaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.WeaponSearch), params)

export const weaponFullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V1, RESOURCES.Weapon), params)

export const weaponV2BaseResponse = async (params: GetBaseResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.WeaponSearch), params)

export const weaponV2FullResponse = async (params: GetFullResponseParams) =>
  getSTAPI(stapi_url(VERSIONS.V2, RESOURCES.Weapon), params)

export const v1SearchAnimals = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.AnimalSearch), params, search)

export const v1SearchAstronomicalObjects = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V1, RESOURCES.AstronomicalObjectSearch),
    params,
    search
  )

export const v1SearchBookCollections = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V1, RESOURCES.BookCollectionSearch),
    params,
    search
  )

export const v1SearchBooks = async ({ search, ...params }: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.BookSearch), params, search)

//   v1SearchBookSeries(
export const v1SearchBookSeries = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.BookSeriesSearch), params, search)

export const v1SearchCharacters = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.CharacterSearch), params, search)

// export const v1SearchCollections = async ({
//   search,
//   ...params
// }: PostSearchParams) =>
//   postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.CollectionSearch), params, search)

export const v1SearchComicCollections = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V1, RESOURCES.ComicCollectionSearch),
    params,
    search
  )

export const v1SearchComicSeries = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ComicSeriesSearch), params, search)

export const v1SearchComicStrips = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ComicStripSearch), params, search)

export const v1SearchComics = async ({ search, ...params }: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ComicsSearch), params, search)

export const v1SearchCompanies = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.CompanySearch), params, search)

export const v1SearchConflicts = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ConflictSearch), params, search)

export const v1SearchElements = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.ElementSearch), params, search)

export const v1SearchEpisodes = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.EpisodeSearch), params, search)

export const v1SearchFood = async ({ search, ...params }: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.FoodSearch), params, search)

export const v1SearchLiterature = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.LiteratureSearch), params, search)

export const v1SearchLocations = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.LocationSearch), params, search)

export const v1SearchMagazineSeries = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V1, RESOURCES.MagazineSeriesSearch),
    params,
    search
  )

export const v1SearchMagazines = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.MagazineSearch), params, search)

export const v1SearchMaterials = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.MaterialSearch), params, search)

export const v1SearchMedicalConditions = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V1, RESOURCES.MedicalConditionSearch),
    params,
    search
  )

export const v1SearchMovies = async ({ search, ...params }: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.MovieSearch), params, search)

export const v1SearchOccupations = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.OccupationSearch), params, search)

export const v1SearchOrganizations = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V1, RESOURCES.OrganizationSearch),
    params,
    search
  )

export const v1SearchPerformers = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.PerformerSearch), params, search)

export const v1SearchSeasons = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.SeasonSearch), params, search)

export const v1SearchSeries = async ({ search, ...params }: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.SeriesSearch), params, search)

export const v1SearchSoundtracks = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.SoundtrackSearch), params, search)

export const v1SearchSpacecraftClasses = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V1, RESOURCES.SpacecraftClassSearch),
    params,
    search
  )

export const v1SearchSpacecrafts = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.SpacecraftSearch), params, search)

export const v1SearchSpecies = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.SpeciesSearch), params, search)

export const v1SearchStaff = async ({ search, ...params }: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.StaffSearch), params, search)

export const v1SearchTechnology = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.TechnologySearch), params, search)

export const v1SearchTitles = async ({ search, ...params }: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.TitleSearch), params, search)

export const v1SearchTradingCardDecks = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V1, RESOURCES.TradingCardDeckSearch),
    params,
    search
  )

export const v1SearchTradingCardSets = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V1, RESOURCES.TradingCardSetSearch),
    params,
    search
  )

export const v1SearchTradingCards = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.TradingCardSearch), params, search)

export const v1SearchVideoGames = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.VideoGameSearch), params, search)

export const v1SearchVideoReleases = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V1, RESOURCES.VideoReleaseSearch),
    params,
    search
  )

export const v1SearchWeapons = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V1, RESOURCES.WeaponSearch), params, search)

export const v2SearchAstronomicalObjects = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V2, RESOURCES.AstronomicalObjectSearch),
    params,
    search
  )

export const v2SearchBooks = async ({ search, ...params }: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V2, RESOURCES.BookSearch), params, search)

export const v2SearchCompanies = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V2, RESOURCES.CompanySearch), params, search)

export const v2SearchElements = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V2, RESOURCES.ElementSearch), params, search)

export const v2SearchLocations = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V2, RESOURCES.LocationSearch), params, search)

export const v2SearchOccupations = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V2, RESOURCES.OccupationSearch), params, search)

export const v2SearchPerformers = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V2, RESOURCES.PerformerSearch), params, search)

export const v2SearchSpacecraftClasses = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V2, RESOURCES.SpacecraftClassSearch),
    params,
    search
  )

export const v2SearchSpacecrafts = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V2, RESOURCES.SpacecraftSearch), params, search)

export const v2SearchSpecies = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V2, RESOURCES.SpeciesSearch), params, search)

export const v2SearchStaff = async ({ search, ...params }: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V2, RESOURCES.StaffSearch), params, search)

export const v2SearchTechnology = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V2, RESOURCES.TechnologySearch), params, search)

export const v2SearchTitles = async ({ search, ...params }: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V2, RESOURCES.TitleSearch), params, search)

export const v2SearchVideoReleases = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(
    stapi_url(VERSIONS.V2, RESOURCES.VideoReleaseSearch),
    params,
    search
  )

export const v2SearchWeapons = async ({
  search,
  ...params
}: PostSearchParams) =>
  postSTAPI(stapi_url(VERSIONS.V2, RESOURCES.WeaponSearch), params, search)
