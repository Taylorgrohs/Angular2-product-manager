USE [Cars_db]
GO
/****** Object:  Table [dbo].[Cars]    Script Date: 8/11/2016 4:29:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cars](
	[carId] [int] NOT NULL,
	[carName] [nvarchar](max) NOT NULL,
	[description] [nvarchar](max) NULL,
	[imageUrl] [nvarchar](max) NULL,
	[imageUrl1] [nvarchar](max) NULL,
	[noBoost] [float] NULL,
	[boost] [float] NULL,
	[total] [float] NULL,
	[length] [float] NULL,
	[width] [float] NULL,
	[height] [float] NULL,
	[surface] [float] NULL,
 CONSTRAINT [PK_Cars] PRIMARY KEY CLUSTERED 
(
	[carId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
